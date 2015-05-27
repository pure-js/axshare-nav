# Axshure navigation menu

## Installation
Install this package using following command:

    bower install axshare-nav --save-dev

After that you need run

	npm install

```jade
    block axshare-nav
      include axshare-nav
      include /bower_components/axshare-nav/jade/nav-constructor
```

in main.css file do insert SCSS or Stylus

    @import "/bower_components/axshare-nav/stylesheets/axshare-nav";

After that create file axshare-nav, using syntax like in file axsahre-nav.example.jade.
If you using gulp, you should shure, what you have a basedir

```javascript
.pipe(jade({
  basedir: './',
  pretty: true
}))
```

## Using
Run the following command

	node app/scraper.js
