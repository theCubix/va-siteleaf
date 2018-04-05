'use strict';
 
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('jshint', ['build-js'], function () {
  return gulp.src('sources/js/**/*.js')
    .pipe(eslint({
      'env': {
        'es6': true
      },
      'extends': 'eslint:recommended',
      'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'double'],
        'semi': ['error', 'always'],

        // override default options for rules from base configurations
        'comma-dangle': ['error', 'always'],
        'no-cond-assign': ['error', 'always'],

        // disable rules from base configurations
        'no-console': 'off',
      }
    }))
    .pipe(eslint.format());
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
      presets: ["env"]
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
  gulp.watch('sources/js/**/*.js', ['build-js', 'jshint']);
  gulp.watch('sources/sass/**/*.scss', ['build-css']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['jshint', 'build-js', 'build-css']);
