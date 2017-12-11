// Load plugins
var del = require('del'),
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cache = require('gulp-cache'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    lr = require('tiny-lr'),
    server = lr();

// Styles
gulp.task('styles', function() {
  return gulp.src('assets/css/**/*')
    .pipe(less())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('src/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest('src/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('assets/scripts/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('src/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(livereload(server))
    .pipe(gulp.dest('src/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('src/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Fonts
gulp.task('copyfonts', function() {
   gulp.src('assets/fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('src/fonts'))
   .pipe(notify({ message: 'Fonts task complete' }));;
});

// Clean
gulp.task('clean', function(cb) {
   del(['src/styles/', 'src/scripts', 'src/images'], cb)
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'copyfonts');
});

// Watch
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('assets/css/**/*', ['styles']);
    gulp.watch('assets/scripts/**/*.js', ['scripts']);
    gulp.watch('assets/images/**/*', ['images']);
    gulp.watch('assets/fonts/**/*', ['copyfonts']);
    gulp.watch(['src/**']).on('change', livereload.changed);
});
