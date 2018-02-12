'use strict';
 
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['watch']);

gulp.task('jshint', function () {
  return gulp.src('sources/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
  gulp.watch('sources/js/**/*.js', ['jshint']);
});

// gulp.task('sass', function () {
//   return gulp.src('./sources/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });

// gulp.task('optimize-css', function () {
//   return gulp.src('./sources/sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer({
//       browsers: ['last 4 versions'],
//       cascade: false
//     }))
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sources/sass/**/*.scss', ['sass']);
// });
