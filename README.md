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

Also [Download PhantomJS](http://phantomjs.org/download.html) and ibstall it.

## Using

### First step
run PhantomJS, using code below

    phantomjs phantom.js

And run the following comman with path to downloaded file like a second argument

    node app/scraper.js for-scraping/result.html

or if you just want to test it

    node app/scraper.js for-scraping/example.html

And app will create output directory with all menu items and output.jade file in te root of current directory
