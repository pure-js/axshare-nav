var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass');


var paths = {
  scss: [ 'stylesheets/**/*.scss' ],
  jade: 'examples/*.jade',
  fonts: 'fonts/*.{ttf,woff,eof,svg,eot}'
};


gulp.task( 'html', function() {
  gulp.src( 'examples/index.jade' )
    .pipe(jade({
      basedir: './',
      pretty: true
    }))
    .pipe(gulp.dest( 'examples-build/' ))
});

gulp.task( 'css', function () {
  gulp.src( 'stylesheets/axshare-nav.scss' )
    .pipe(sass())
    .pipe(gulp.dest( 'examples-build/' ));
});

gulp.task( 'copy-fonts', function() {
  gulp.src( paths.fonts )
    .pipe(gulp.dest( 'examples-build/fonts/' ));
});


// Rerun the task when a file changes
gulp.task( 'watch', function() {
  gulp.watch( paths.scss, [ 'css' ]);
  gulp.watch( paths.jade, [ 'html' ]);
});


gulp.task( 'build', [ 'css', 'html', 'copy-fonts' ]);
// The default task (called when you run `gulp` from cli)
gulp.task( 'default', [ 'build', 'watch' ]);