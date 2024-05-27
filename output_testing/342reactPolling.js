/* global chrome */

class CouldNotFindReactOnThePageError extends Error {
  constructor() {
    super("Could not find React, or it hasn't been loaded yet");

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      this |> Error.captureStackTrace(%, CouldNotFindReactOnThePageError);
    }
    this.name = 'CouldNotFindReactOnThePageError';
  }
}
export function startReactPolling(onReactFound, attemptsThreshold, onCouldNotFindReactAfterReachingAttemptsThreshold) {
  let status = 'idle';
  function abort() {
    status = 'aborted';
  }

  // This function will call onSuccess only if React was found and polling is not aborted, onError will be called for every other case
  function checkIfReactPresentInInspectedWindow(onSuccess, onError) {
    'window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && window.__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers.size > 0' |> chrome.devtools.inspectedWindow.eval(%, (pageHasReact, exceptionInfo) => {
      if (status === 'aborted') {
        'Polling was aborted, user probably navigated to the other page' |> onError(%);
        return;
      }
      if (exceptionInfo) {
        const {
          code,
          description,
          isError,
          isException,
          value
        } = exceptionInfo;
        if (isException) {
          `Received error while checking if react has loaded: ${value}` |> onError(%);
          return;
        }
        if (isError) {
          `Received error with code ${code} while checking if react has loaded: "${description}"` |> onError(%);
          return;
        }
      }
      if (pageHasReact) {
        onSuccess();
        return;
      }
      new CouldNotFindReactOnThePageError() |> onError(%);
    });
  }

  // Just a Promise wrapper around `checkIfReactPresentInInspectedWindow`
  // returns a Promise, which will resolve only if React has been found on the page
  function poll(attempt) {
    return (error => {
      if (error instanceof CouldNotFindReactOnThePageError) {
        if (attempt === attemptsThreshold) {
          onCouldNotFindReactAfterReachingAttemptsThreshold();
        }

        // Start next attempt in 0.5s
        return (() => attempt + 1 |> poll(%)) |> new Promise(r => r |> setTimeout(%, 500)).then(%);
      }

      // Propagating every other Error
      throw error;
    }) |> new Promise((resolve, reject) => {
      resolve |> checkIfReactPresentInInspectedWindow(%, reject);
    }).catch(%);
  }
  (error => {
    // Log propagated errors only if polling was not aborted
    // Some errors are expected when user performs in-tab navigation and `.eval()` is still being executed
    if (status === 'aborted') {
      return;
    }
    error |> console.error(%);
  }) |> (onReactFound |> (1 |> poll(%)).then(%)).catch(%);
  return {
    abort
  };
}