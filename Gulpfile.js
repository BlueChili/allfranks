var gulp = require('gulp');

// Include Plugins
var babel = require('gulp-babel');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');

//Markdown to json task
// var markdown = require('gulp-markdown-to-json');


// Compile Sass; note sass options to prevent server from breaking when you fudge a css rule
gulp.task('stylus', function() {
  return gulp.src('assets/stylus/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      'include css': true,
      compress: true,
      errToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('static/css/'));
});

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//   return gulp.src('js/modules#<{(|.js')
//     .pipe(concat('main.js'))
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(uglify())
//     .pipe(rename('main.min.js'))
//     .pipe(gulp.dest('../static/js'));
// });

//Markdown to json task
// gulp.task('markdown', function() {
//   gulp.src('../content/**/*.md')
//     .pipe(gutil.buffer())
//     .pipe(markdown('search-index.json'))
//     .pipe(gulp.dest('../static/'))
// });

//the default "compile" task for sass and js
// gulp.task('compile', ['stylus', 'scripts'], function() {
gulp.task('compile', ['stylus'], function() {
  gulp.watch('assets/stylus/**/*.styl', ['stylus']);
  // gulp.watch("scss/partials#<{(|.scss", ['sass']);
  // gulp.watch("js/modules#<{(|.js", ['scripts']);
  // gulp.watch("../content/**/*.md", ['markdown']);
});

// Default Task
gulp.task('default', ['compile']);
