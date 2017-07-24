windowCustomized = {};
var iframe = document.createElement('iframe');
iframe.onload = function () {
    var standardGlobals = Object.keys(iframe.contentWindow);
    for (var b in window) {
        var prop = window[b];
        if (window.hasOwnProperty(b) && prop && !prop.toString().includes('native code') && !standardGlobals.includes(b)) {
            windowCustomized[b] = prop;
        }
    }
    //console.info(windowCustomized)
};
iframe.src = 'about:blank';
document.body.appendChild(iframe);