let gulp = require('gulp');

let babelify = require('babelify');
let browserify = require('browserify');
let browserSync = require('browser-sync').create();
let buffer = require('vinyl-buffer');
let livereload = require('gulp-livereload');
let sass = require('gulp-sass');
let source = require('vinyl-source-stream');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');

function handleError(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('js', () => {
    // app.js is your main JS file with all your module inclusions
    return browserify({entries: './src/js/main.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./bin/js/'))
        .pipe(browserSync.stream());
});

gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./bin'))
        .pipe(browserSync.stream());
});

gulp.task('css', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./bin/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './bin/',
        },
    });
});

gulp.task('watch', ['css', 'js'], () => {
    browserSync.init({
        server: {
            baseDir: './bin/',
        },
    });
    gulp.watch('./src/*.html', ['html'])
        .on('error', handleError);
    gulp.watch('./src/scss/**/*.scss', ['css'])
        .on('error', handleError);
    gulp.watch('./src/js/**/*.js', ['js'])
        .on('error', handleError);
});

gulp.task('default', ['watch']);