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
        ps = 'pageshow';

    d[on]('DOMContentLoaded', resizeFontSize);

    if ('on' + ps in w)
        w[on](ps, function(e) {
            if (e.persisted) debouceResize();
        });
    else
        w[on]("load", debouceResize);

    w[on]("resize", debouceResize);

    function debouceResize() {
        clearTimeout(timer);
        setTimeout(resizeFontSize, 300);
    }

    function resizeFontSize() {
        doc.style.fontSize = getWidth() * 20 / 320 + "px";
    }

    function getWidth() {
        return doc.getBoundingClientRect().width;
    }
})();