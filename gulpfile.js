var gulp = require('gulp');

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

gulp.task('default', gulp.series('first', 'second', 'third', 'fourth'));