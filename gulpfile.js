const gulp = require('gulp'),
  plugins = require('gulp-load-plugins')();

const paths = {
  html: [ 'pages/index.pug' ],
  css: [ 'stylesheets/axshare-nav.styl' ],
  htmlWatch: [ 'pages/*.pug', 'includes/*.pug'],
  cssWatch: [ 'stylesheets/**/*.styl' ],
  fonts: 'fonts/*.{ttf,woff,eof,svg,eot}',
  build: 'build/'
};


gulp.task( 'html', function() {
  gulp.src( paths.html )
    .pipe(plugins.pug({
      basedir: './',
      pretty: true
    }))
    .pipe(gulp.dest( paths.build ))
});

gulp.task( 'css', function() {
  gulp.src( paths.css )
    .pipe(plugins.stylus())
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
  plugins.connect.server({
    root: 'build',
    port: 9420
  });
});

gulp.task('deploy', function() {
  gulp.src('build/**/*')
    .pipe(plugins.ghPages());
});

gulp.task( 'build', [ 'css', 'html', 'copy-fonts' ]);
// The default task (called when you run `gulp` from cli)
gulp.task( 'default', [ 'build', 'connect', 'watch' ]);
