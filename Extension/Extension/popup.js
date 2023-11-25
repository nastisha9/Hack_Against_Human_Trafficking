chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url;
    var activeTabTitle = activeTab.title;
    document.getElementById('pageTitle').innerHTML = activeTabTitle;
    document.getElementById('pageURL').innerHTML = activeTabUrl;
});