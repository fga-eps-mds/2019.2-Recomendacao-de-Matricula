chrome.browserAction.onClicked.addListener(function(activeTab){
    var quadroResumoURL = "https://matriculaweb.unb.br/graduacao/sec/qr.aspx";
    chrome.tabs.create({ url: quadroResumoURL });
});
