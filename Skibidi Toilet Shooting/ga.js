function loadScriptAsync(scriptSrc, callback) {
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-8SK3BC00X8', function(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8SK3BC00X8');
})