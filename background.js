console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg2 = {
		txt2 : "Hello"
	}
	chrome.tabs.sendMessage(tab.id,msg2);
} 