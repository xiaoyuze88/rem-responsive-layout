rem-responsive-layout
=====================

Code snippet for `rem` responsive layout for mobile, calculate screen width and use the font-size to make responsive happens

## Usage

Just insert these code snippet into the `head` tag.

    <!DOCTYPE html>
    <html lang="zh-cmn-Hans">

    <head>        
    <script>!function(){function g(){clearTimeout(a),setTimeout(h,300)}function h(){e.style.fontSize=20*i()/320+"px"}function i(){return window._screenSize=e.getBoundingClientRect(),window._screenSize.width}var a,b="addEventListener",c=document,d=window,e=c.documentElement,f="pageshow";c[b]("DOMContentLoaded",h),"on"+f in d?d[b](f,function(a){a.persisted&&g()}):d[b]("load",g),d[b]("resize",g)}();</script>
    </head>
    <body></body>
    </html>

Then it will handler the font-size for your responsive `rem` layout.

These codes are modified and optimize for my own usage from [Jieyou](https://github.com/jieyou/rem_layout) and [Wintercn](https://github.com/amfe/lib.flexible).

Put it here for convenience.