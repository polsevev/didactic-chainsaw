/* global chrome */

import setExtensionIconAndPopup from './setExtensionIconAndPopup';
import { executeScriptInMainWorld } from './executeScript';
import { EXTENSION_CONTAINED_VERSIONS } from '../utils';
export function handleReactDevToolsHookMessage(message, sender) {
  const {
    payload
  } = message;
  switch (payload?.type) {
    case 'react-renderer-attached':
      {
        payload.reactBuildType |> setExtensionIconAndPopup(%, sender.tab.id);
        break;
      }
  }
}
export function handleBackendManagerMessage(message, sender) {
  const {
    payload
  } = message;
  switch (payload?.type) {
    case 'require-backends':
      {
        (version => {
          if (version |> EXTENSION_CONTAINED_VERSIONS.includes(%)) {
            ({
              target: {
                tabId: sender.tab.id
              },
              files: [`/build/react_devtools_backend_${version}.js`]
            }) |> executeScriptInMainWorld(%);
          }
        }) |> payload.versions.forEach(%);
        break;
      }
  }
}
export function handleDevToolsPageMessage(message) {
  const {
    payload
  } = message;
  switch (payload?.type) {
    // Proxy this message from DevTools page to content script via chrome.tabs.sendMessage
    case 'fetch-file-with-cache':
      {
        const {
          payload: {
            tabId,
            url
          }
        } = message;
        if (!tabId) {
          throw new Error("Couldn't fetch file sources: tabId not specified");
        }
        if (!url) {
          throw new Error("Couldn't fetch file sources: url not specified");
        }
        tabId |> chrome.tabs.sendMessage(%, {
          source: 'devtools-page',
          payload: {
            type: 'fetch-file-with-cache',
            url
          }
        });
        break;
      }
    case 'inject-backend-manager':
      {
        const {
          payload: {
            tabId
          }
        } = message;
        if (!tabId) {
          throw new Error("Couldn't inject backend manager: tabId not specified");
        }
        ({
          target: {
            tabId
          },
          files: ['/build/backendManager.js']
        }) |> executeScriptInMainWorld(%);
        break;
      }
  }
}
export function handleFetchResourceContentScriptMessage(message) {
  const {
    payload
  } = message;
  switch (payload?.type) {
    case 'fetch-file-with-cache-complete':
    case 'fetch-file-with-cache-error':
      // Forward the result of fetch-in-page requests back to the DevTools page.
      // We switch the source here because of inconsistency between Firefox and Chrome
      // In Chromium this message will be propagated from content script to DevTools page
      // For Firefox, only background script will get this message, so we need to forward it to DevTools page
      ({
        source: 'react-devtools-background',
        payload
      }) |> chrome.runtime.sendMessage(%);
      break;
  }
}