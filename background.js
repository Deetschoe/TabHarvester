chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copyUrls") {
        chrome.tabs.query({}, (tabs) => {
            const urls = tabs.map(tab => tab.url).join('\n');
            sendResponse({ urls: urls });
        });
        return true;
    }
});
