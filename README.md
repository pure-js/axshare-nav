# Axshure navigation menu

If you have Axure RP prototypes, and should repit thir structre, that package will help you. For example http://1zujqg.axshare.com/

![Axshure link screenshoot](/img/axshare-nav.png?raw=true "Axshure link screenshoot")

## Installation
Install this package using following command:

    bower install axshare-nav --save

After that you need run

    npm install

And insert similar code to your jade file

```jade
block axshare-nav
  include axshare-nav
  include /bower_components/axshare-nav/jade/nav-constructor
```

in .styl file do insert

```stylus
@import "/bower_components/axshare-nav/stylesheets/axshare-nav";
```

After that create file axshare-nav, using syntax like in file axsahre-nav.example.jade.
If you using gulp, you should shure, what you have a basedir

```javascript
.pipe(jade({
  basedir: './',
  pretty: true
}))
```

## Using

Download web page using Save as... in Google Chrome and run the following comman with path to downloaded file like a second argument

    node app/scraper.js for-scraping/example.html

or

    node app/scraper.js for-scraping/result.html

And app will create output directory and output.jade file in te root of current directory

Also we have phantom js script, run the following code

    phantomjs phantom.js
