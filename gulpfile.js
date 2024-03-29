const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const plumber = require('gulp-plumber');
const notify = require("gulp-notify");

// Таск для компиляции SCSS в CSS
gulp.task('scss', function (callback) {

    return gulp.src('./app/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })


        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowsersList: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css/'))
    callback();
});



// const sass = require('gulp-sass');

// gulp.task('scss', function (callback) {
//     return gulp.src('./app/scss/main.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./app/css/'))
//     callback();
// });

//обновление указанного афйла (слежка за ним)

gulp.task('watch', function () {
    watch(['./app/*.html', './app/css/**/*.css'], gulp.parallel(browserSync.reload));
    // watch(' ./app/scss/**/*.scss', gulp.parallel('scss'));

    //способ для обновления scss, чтобы все изменения применялись при сохранении изменений
    watch('./app/scss/**/*.scss', function () {
        setTimeout(gulp.parallel('scss'), 1000)
    })

});

//задача для старта сервера из папки

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })
});

gulp.task('default', gulp.parallel('server', 'watch', 'scss'));

/*
gulp.task('first', function (callback) {
    console.log('Hello from THIRD task');
    callback();
})

gulp.task('second', function (callback) {
    console.log('Hello from THIRD task');
    callback();
})

gulp.task('third', function (callback) {
    console.log('Hello from THIRD task');
    callback();
})

gulp.task('fourth', function (callback) {
    console.log('Hello from THIRD task');
    callback();
})

gulp.task('default', gulp.series('first', 'second', 'third', 'fourth')); */