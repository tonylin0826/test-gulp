var gulp = require('gulp');

var browserify = require('browserify');
var buffer = require('gulp-buffer');
var tap = require('gulp-tap');

gulp.task('default', ['browserify']);

gulp.task('browserify', function () {

  return  gulp.src('src/js/*.js', { read: false }) // no need of reading file because browserify does.

    .pipe(tap(function (file) {
      
      file.contents = browserify(file.path, { debug: true }).bundle();

    }))

    .pipe(buffer())
    .pipe(gulp.dest('dest'));

});

