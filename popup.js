document.getElementById('copyButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "copyUrls" }, (response) => {
        if (response && response.urls) {
            navigator.clipboard.writeText(response.urls)
                .then(() => console.log("Your silly URLs copied successfully"))
                .catch(err => console.error("Errorrrrr ahh no it did not copy ya URLs: ", err));
        }
    });
});
