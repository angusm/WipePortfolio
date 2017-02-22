let gulp = require('gulp');

let browserify = require('browserify');
let babelify = require('babelify');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let livereload = require('gulp-livereload');
let sass = require('gulp-sass');


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
        .pipe(livereload());
});

gulp.task('css', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./bin/css'))
});

gulp.task('watch', ['css', 'js'], () => {
    livereload.listen();
    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['watch']);