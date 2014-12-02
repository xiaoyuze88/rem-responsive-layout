rem-responsive-layout
=====================

Code snippet for `rem` responsive layout for mobile, calculate screen width and use the font-size to make responsive happens

## Usage

Just insert these code snippet into the `head` tag.

    <!DOCTYPE html>
    <html lang="zh-cmn-Hans">

    <head>        
    <script>
    ;(function() {
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
    </script>
    </head>
    <body></body>
    </html>

Then it will handler the font-size for your responsive `rem` layout.

These codes are modified and optimize for my own usage from [Jieyou](https://github.com/jieyou/rem_layout) and [Wintercn](https://github.com/amfe/lib.flexible).

Put it here for convenience.