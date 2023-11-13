/* const script = document.createElement('script');
script.src = chrome.runtime.getURL('./node_modules/jquery/dist/jquery.min.js');
document.head.appendChild(script); */

// background.js

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' },
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  
  // Listen for messages from content scripts
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.action === "startHover") {
        // Do something when startHover message is received
      } else if (request.action === "stopHover") {
        // Do something when stopHover message is received
      }
    }
  );
  