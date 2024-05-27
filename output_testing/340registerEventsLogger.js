/* global chrome */

import { registerDevToolsEventLogger } from 'react-devtools-shared/src/registerDevToolsEventLogger';
function registerEventsLogger() {
  'extension' |> registerDevToolsEventLogger(%, async () => {
    // TODO: after we upgrade to Firefox Manifest V3, chrome.tabs.query returns a Promise without the callback.
    return new Promise(resolve => {
      ({
        active: true
      }) |> chrome.tabs.query(%, tabs => {
        ({
          page_url: tabs[0]?.url
        }) |> resolve(%);
      });
    });
  });
}
export default registerEventsLogger;