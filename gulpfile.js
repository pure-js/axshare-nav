var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass');


var paths = {
  cssWatch: [ 'SCSS/**/*.scss' ],
  htmlWatch: [ 'examples/*.jade', 'jade/*.jade'],
  fonts: 'fonts/*.{ttf,woff,eof,svg,eot}',
  build: 'build/'
};


gulp.task( 'html', function() {
  gulp.src( 'examples/index.jade' )
    .pipe(jade({
      basedir: './',
      pretty: true
    }))
    .pipe(gulp.dest( paths.build ))
});

gulp.task( 'css', function () {
  gulp.src( 'SCSS/axshare-nav.scss' )
    .pipe(sass())
    .pipe(gulp.dest( paths.build ));
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


gulp.task( 'build', [ 'css', 'html', 'copy-fonts' ]);
// The default task (called when you run `gulp` from cli)
gulp.task( 'default', [ 'build', 'watch' ]);