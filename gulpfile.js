const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const watch = require('gulp-watch');

//обновление указанного афйла (слежка за ним)

gulp.task('watch', function () {
    watch(['./app/*.html', './app/css/*.css'], gulp.parallel(browserSync.reload));
});

//задача для старта сервера из папки

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })
});

gulp.task('default', gulp.parallel('server', 'watch'));

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