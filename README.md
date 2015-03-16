# Installation
Install this package using following command:
```
bower install axshare-nav --save-dev
```
Jade
```
block axshare-nav
  include axshare-nav
  include /bower_components/axshare-nav/jade/nav-constructor
```
in main.css file do insert
SCSS
```
// Third-party
@import "/bower_components/axshare-nav/stylesheets/axshare-nav";
```
After that create file axshare-nav, using syntax like in file axsahre-nav.example.jade.
If you using gulp, you should shure, in what you have a basedir
```
.pipe(jade({
  basedir: './',
  pretty: true
}))
```
