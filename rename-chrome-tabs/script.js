'use strict'

document.addEventListener("DOMContentLoaded", function () {
	let inputElement = document.getElementById('input');

	function changeBrowserTitle(newTitle) {
		document.title = newTitle;
	}

	inputElement.addEventListener('input', function () {
		let value = inputElement.value;
		console.log(value);

		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			let tab = tabs[0];
			chrome.scripting
				.executeScript({
					target: { tabId: tab.id, allFrames: true },
					function: changeBrowserTitle,
					args: [value],
				})
				.then(() => console.log("script injected"))
		});
	});
});
