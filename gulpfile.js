const project = "WatchCustomizer";
const source = './src';
const dist = './dist';
const URL = 'watch.customizer:7888';

// Its not ES6, so keep it short! ;)
const vendors = [
    "./node_modules/pace-js/pace.min.js",
    "./node_modules/jquery/dist/jquery.min.js",
    "./node_modules/angular/angular.js",
    "./node_modules/angular-animate/angular-animate.js",
    "./node_modules/angular-sanitize/angular-sanitize.js",
    "./node_modules/popper.js/dist/umd/popper.min.js",
    "./node_modules/bootstrap/dist/js/bootstrap.min.js",
    "./node_modules/moment/min/moment.min.js",
    "./node_modules/gsap/TweenLite.js",
    source + '/vendors/*.js'
];

// Load plugins
const del = require('del'),
    gulp = require('gulp'),

    // Image Opstimization
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer'), //See if file is newer

    //Utilities
    argv = require('yargs').argv, //Get arguments from CLI
    gulpif = require('gulp-if'), // use if on pipe streamlines
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),

    // JS
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),

    // CSS
    mqpacker = require('css-mqpacker'), // Pack all @media queries
    cssnano = require('cssnano'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    less = require('gulp-less'),

    //Compression and Cache Optimization
    gzip = require('gulp-gzip'),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    htmlmin = require('gulp-htmlmin'),

    // Server
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

// ############ Styles ###############
let prefixes = [
    'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
    // isn't this too much? ie8 wtf???
];

// Sass
gulp.task('coreStyles', () => {
    return gulp.src(source + '/styles/main.scss')
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 3
        }).on('error', sass.logError))
        .pipe(postcss([mqpacker(), autoprefixer({
            browsers: prefixes
        }), cssnano({
            safe: true,
            autoprefixer: false
        })]))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});
// CSS with trivial rules (in separate file for optimizations like LazyLoad)
gulp.task('asyncStyles', () => {
    return gulp.src(source + '/styles/async.scss')
        .pipe(sass.sync({
            outputStyle: 'expanded',
            precision: 3
        }).on('error', sass.logError))
        .pipe(postcss([mqpacker(), autoprefixer({
            browsers: prefixes
        }), cssnano({
            safe: true,
            autoprefixer: false
        })]))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});
//Less
gulp.task('styles', function () {
    return gulp.src(source + '/styles/main.less')
        .pipe(less())
        .pipe(postcss([mqpacker(), autoprefixer({
            browsers: prefixes
        }), cssnano({
            safe: true,
            autoprefixer: false
        })]))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});

// ############ Scripts ###############

gulp.task('scripts', () => {
    return gulp.src(source + '/scripts/app/**/*.js')
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(concat('app.js'))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('vendors', () => {
    return gulp.src(vendors)
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});

// JS with trivial rules (in separate file for optimizations like LazyLoad)
gulp.task('async', () => {
    return gulp.src(source + '/scripts/async/*.js')
        .pipe(gulpif(!argv.production, sourcemaps.init()))
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(concat('async.js'))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulpif(!argv.production, sourcemaps.write()))
        .pipe(gulp.dest(dist))
        .pipe(reload({
            stream: true
        }));
});

// ############ Images ###############

gulp.task('images', () => {
    return gulp.src(source + '/images/**/*')
        .pipe(newer(dist + '/images'))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins: [{
                removeViewBox: true
            }]
        }))
        .pipe(gulp.dest(dist + '/images'));
});

gulp.task('fonts', () => {
    return gulp.src(source + '/fonts/**/*')
        .pipe(newer(dist + '/fonts'))
        .pipe(gulp.dest(dist + '/fonts'));
});


gulp.task("rev", function () {
    return gulp.src([dist + "/**/*.css", dist + "/**/*.js", dist + "/**/*.gz"])
        .pipe(rev())
        .pipe(gulp.dest(dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dist));
});
gulp.task("revision", ["rev"], function () {
    var manifest = gulp.src(dist + "/rev-manifest.json");

    return gulp.src(dist + "/**/*.{html,php}")
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(dist));
});
gulp.task('html', () => {
    return gulp.src(source + '/**/*.{html,php}')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            processConditionalComments: true,
            removeComments: true,
            removeEmptyAttributes: false,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }))
        .pipe(gulp.dest(dist));
});

// ############ GZip ###############
gulp.task('gzip', () => {
    return gulp.src([dist + '/*.js', dist + '/*.css'])
        .pipe(gzip())
        .pipe(gulp.dest(dist));
});

// ############ Cleaning ###############
gulp.task('clean', function () {
    return del([
        '**/.sass-cache',
        '**/.DS_Store',
        '**/Thumbs.db',
        dist + '/**',
        '!' + dist,
        '!' + dist + '/fonts',
        '!' + dist + '/images',
        '!' + dist + '/_templates',
        '!' + dist + '/SVG',
        '!' + dist + '/dummy',
        '!' + dist + '/fonts/**/*',
        '!' + dist + '/images/**/*',
        '!' + dist + '/_templates/**/*',
        '!' + dist + '/SVG/**/*',
        '!' + dist + '/dummy/**/*'
    ]).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('default', ['clean']);
gulp.task('build', ['clean'], function () {
    if (argv.sass) {
        return gulp.start(
            'vendors', 'scripts', 'async',
            'coreStyles', 'asyncStyles',
            'html',
            'fonts', 'images'
        );
    } else {
        return gulp.start(
            'vendors', 'scripts', 'async',
            'styles', 'asyncStyles',
            'html',
            'fonts', 'images'
        );
    }
});

// Watch
gulp.task('watch', function () {
    // Files that requires build tasks
    gulp.watch(source + '/styles/**/*.less', ['styles']);
    gulp.watch(source + '/styles/**/*.scss', ['coreStyles', 'asyncStyles']);
    gulp.watch(source + '/scripts/app/**/*.js', ['scripts']);
    gulp.watch(source + '/scripts/async/**/*.js', ['async']);
    gulp.watch(source + '/scripts/vendors/**/*.js', ['vendors']);
    gulp.watch(source + '/**/*.{html,php}', ['html']);
    gulp.watch(source + '/images/**/*', ['images']);
    gulp.watch(source + '/fonts/**/*', ['fonts']);

    // Files that require full reload
    gulp.watch([
        dist + '/fonts/**/*',
        dist + '/images/**/*',
        './index.php'
    ]).on('change', reload);
});

gulp.task('serve', ['build'], () => {
    // Files that requires build tasks
    gulp.watch(source + '/styles/**/*.less', ['styles']);
    gulp.watch(source + '/styles/**/*.scss', ['coreStyles', 'asyncStyles']);
    gulp.watch(source + '/scripts/app/**/*.js', ['scripts']);
    gulp.watch(source + '/scripts/async/**/*.js', ['async']);
    gulp.watch(source + '/scripts/vendors/**/*.js', ['vendors']);
    gulp.watch(source + '/**/*.{html,php}', ['html']);
    gulp.watch(source + '/images/**/*', ['images']);
    gulp.watch(source + '/fonts/**/*', ['fonts']);

    // Files that require full reload
    gulp.watch([
        dist + '/fonts/**/*',
        dist + '/images/**/*',
        './index.php'
    ]).on('change', reload);

    browserSync.init({
        proxy: URL,
        notify: true,
        open: false,
        port: 9000,
        logLevel: "info",
        logConnections: false,
        logPrefix: project
    });
});