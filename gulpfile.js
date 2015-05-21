var gulp = require('gulp'),
  jade = require('gulp-jade'),
  stylus = require('gulp-stylus'),
  connect = require('gulp-connect'),
  ghPages = require('gulp-gh-pages');


var paths = {
  html: [ 'pages/index.jade' ],
  css: [ 'stylesheets/axshare-nav.styl' ],
  htmlWatch: [ 'pages/*.jade', 'includes/*.jade'],
  cssWatch: [ 'stylesheets/**/*.styl' ],
  fonts: 'fonts/*.{ttf,woff,eof,svg,eot}',
  build: 'build/'
};


gulp.task( 'html', function() {
  gulp.src( paths.html )
    .pipe(jade({
      basedir: './',
      pretty: true
    }))
    .pipe(gulp.dest( paths.build ))
});

gulp.task( 'css', function() {
  gulp.src( paths.css )
    .pipe(stylus())
    .pipe(gulp.dest( paths.build + 'css/' ));
});

gulp.task( 'copy-fonts', function() {
  gulp.src( paths.fonts )
    .pipe(gulp.dest( paths.build + 'fonts/' ));
});


// Rerun the task when a file changes
gulp.task( 'watch', function() {
  gulp.watch( paths.cssWatch, [ 'css' ]);
  gulp.watch( paths.htmlWatch, [ 'html' ]);
});


gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: 9420
  });
});

gulp.task('deploy', function() {
  gulp.src( paths.build )
    .pipe(ghPages());
});

gulp.task( 'build', [ 'css', 'html', 'copy-fonts' ]);
// The default task (called when you run `gulp` from cli)
gulp.task( 'default', [ 'build', 'connect', 'watch' ]);
