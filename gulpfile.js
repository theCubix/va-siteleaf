var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cp = require('child_process');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var cleanCSS = require('gulp-clean-css');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'js', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Compile files from sources/sass into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('sources/sass/styles.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

/**
 * Compile files from sources/js into both _site/js (for live injecting) and site (for future jekyll builds)
 */
gulp.task('js', function () {
  return gulp.src('sources/js/app.js')
  .pipe(eslint({
    envs: [
      {
        'browser': true,
        'es6': true
      }
    ],
    extends: 'eslint:recommended',
    rules: {
      'indent': ['error', 4],
      'linebreakStyle': ['error', 'unix'],
      'quotes': ['error', 'double'],
      'semi': ['error', 'always'],

      // override default options for rules from base configurations
      'comma-dangle': ['error', 'always'],
      'no-cond-assign': ['error', 'always'],

      // disable rules from base configurations
      'no-console': 'off'
    }
  }))
  .pipe(eslint.format())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('js'));
})

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('sources/sass/**/*.scss', ['sass']);
  gulp.watch('sources/js/**/*.js', ['js']);
  gulp.watch(['*.html', '*.md', '_layouts/*.html', '_posts/*', '_includes/**/*.html'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);