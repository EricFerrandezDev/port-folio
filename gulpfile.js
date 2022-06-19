var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var del = require('del');

var paths = {
  styles: {
    src: 'src/less/import.less',
    watch: 'src/less/*.less',
    dest: 'src/'
  },
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'assets' ]);
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(less())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.watch, ['styles']);
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
gulp.task( 'clean', clean);
gulp.task( 'styles', styles);
gulp.task( 'watch', watch);
gulp.task( 'build', styles);
