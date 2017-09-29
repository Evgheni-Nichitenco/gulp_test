const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');

// Static server
// Название таска 'browser-sync' для удобства запуска меняем на 'server'
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000, // Вписана строчка с указанием порта
            baseDir: "build" // Вписана папка, за которой надо смотреть серверу
        }
    });

    // Галпу дается задача следить за папкой build и всеми вложенными файлами
    // и на событие change (изменение) делать перезагрузку сервера browserSync
    gulp.watch('build/**/*').on('change', browserSync.reload);
});

// Pug
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/index.pug')
        .pipe(pug({
            pretty: true // На выходе будет несжатый HTML код
        }))
        .pipe(gulp.dest('build')) // Куда складывать откомпилированный код HTML
});

// SASS compile
gulp.task('styles:compile', function () { // Вместо SASS вприсано styles:compile
    return gulp.src('source/styles/main.scss') // Точка входа. Откуда брать файл для компиляции
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

// Sprite
gulp.task('sprite', function (cb) {
    var spriteData = gulp.src('source/images/icons/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        imgPath: '../images/sprite.png', // Добавлена строчка
        cssName: 'sprite.scss'
    }));
    return spriteData.img.pipe(gulp.dest('build/images/'));
    return spriteData.css.pipe(gulp.dest('source/styles/global/'));
    cb();
});

//Delete
gulp.task('clean', function del(cb) {
    return rimraf('build', cb);
});

// Copy fonts
gulp.task('copy:fonts', function () {
    return gulp.src('./source/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));
});

// Copy images
gulp.task('copy:images', function () {
    return gulp.src('./source/images/**/*.*')
        .pipe(gulp.dest('build/images'));
});

// Copy
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));

// Watcher
gulp.task('watch', function() {
    gulp.watch('source/template/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('source/styles/**/*.scss', gulp.series('styles:compile'));
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('templates:compile', 'styles:compile', 'sprite', 'copy'),
    gulp.parallel('watch', 'server')
    )
);