'use strict';
 
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');

gulp.task('jshint', function () {
  return gulp.src('sources/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function () {
  return gulp.src('sources/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./css')); 
});

gulp.task('build-js', function () {
  return gulp.src('sources/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
})

gulp.task('watch', function () {
  gulp.watch('sources/js/**/*.js', ['jshint', 'build-js'])
  gulp.watch('sources/sass/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['jshint', 'build-js', 'build-css']);
