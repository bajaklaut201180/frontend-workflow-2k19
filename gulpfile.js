var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    webpack = require("webpack-stream");

gulp.task("sass", function() {
    return gulp.src("./resources/sass/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("script", function() {
    return gulp.src("./resources/js/*.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./public/js/"));
});

gulp.task("serve", function() {
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    });

    gulp.watch("./resources/sass/*.scss", gulp.series("sass"));
    gulp.watch("./resources/sass/**/*.scss", gulp.series("sass"));
    gulp.watch("./resources/js/*.js", gulp.series("script"));
    gulp.watch("./resources/js/**/*.js", gulp.series("script"));


    gulp.watch("./public/js/*.js").on("change", browserSync.reload);
    gulp.watch("./public/css/*.css").on("change", browserSync.reload);
    gulp.watch("./public/*.html").on("change", browserSync.reload);
});