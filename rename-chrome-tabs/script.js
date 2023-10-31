'use strict'

/* document.addEventListener("DOMContentLoaded", function () {
	let inputElement = document.getElementById('input')

	inputElement.addEventListener('input', function () {
		event.preventDefault()
		let value = inputElement.value
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			let tab = tabs[0]
			tab.title = value
			//console.log(value)
		});
	});
})
 */

document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.getElementById('input');

    inputElement.addEventListener('input', function () {
        let value = inputElement.value;
        console.log(value);
        // Send a message to the content script to change the tab title
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: (newTitle) => {
                    document.title = newTitle;
                },
                args: [value]
            });
        });
    });
});

