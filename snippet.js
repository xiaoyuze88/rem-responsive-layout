/**
*   Code snippet for rem responsize layout,caculating font-size by screen width.
*   Xiao Yuze(https://github.com/xiaoyuze88/rem-responsize-layout)
*/

;
(function() {
    var timer,
        on = 'addEventListener',
        d = document,
        w = window,
        doc = d.documentElement,
        ps = 'pageshow',
        lastWidth;
        

    // caculate when DomContentLoaded
    d[on]('DOMContentLoaded', resizeFontSize);

    // If `pageshow` event exist.
    if ('on' + ps in w)
        w[on](ps, function(e) {
            // recaculate it again for some Android can't get the right width when `DOM ready`
            if (e.persisted) debouceResize();
        });
    else
        // If `pageshow` not exist, recaculate when 'load' event
        w[on]("load", debouceResize);

    // recaculate when `resize`
    w[on]("resize", debouceResize);

    // debounce resize caculating
    function debouceResize() {
        clearTimeout(timer);
        timer = setTimeout(resizeFontSize, 300);
    }

    // resize font size
    function resizeFontSize() {
        var width = getWidth();
        // Some Android will trigger more than one `resize` events when user are opening keyboard or some other stuff.
        // So compare new width with the old one, only resize the font-size when window's width actually changed.
        if(width != lastWidth) {
            lastWidth = width;
            doc.style.fontSize = lastWidth * 20 / 320 + "px";
        }
    }

    // Use `getBoundingClientRect` instead of `window.innerWidth/document.documentElement.clientWidth` for more accuracy.
    // Because some Android webviews sometimes get the wrong width by using `window.innerWidth/document.documentElement.clientWidth`.
    function getWidth() {
        return doc.getBoundingClientRect().width;
    }
})();