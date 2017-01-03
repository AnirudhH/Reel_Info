var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('public/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('public/*.scss', ['sass']);
});
gulp.task('default', [
  'sass',
  'watch'
]);
