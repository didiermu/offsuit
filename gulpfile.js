/* ======================================================================================================
 * Plugins utilizados
 * ======================================================================================================*/
const gulp = require("gulp"),
    sass = require("gulp-sass"),
    cssmin = require("gulp-cssmin"),
    autoprefixer = require("gulp-autoprefixer"),
    notify = require("gulp-notify"),
    concat = require("gulp-concat"),
    uglifyes = require("gulp-uglify-es").default,
    browserSync = require("browser-sync").create(),
    pug = require("gulp-pug"),
    rename = require("gulp-rename"),
    imagemin = require("gulp-imagemin"),
    webp = require("imagemin-webp"),
    extReplace = require("gulp-ext-replace"),
    watch = require("gulp-watch"),
    purgecss = require("gulp-purgecss"),
    del = require('del'),
    {
        src,
        dest
    } = require('gulp');

/* ======================================================================================================
 * Tarea PUG
 * ======================================================================================================*/

gulp.task("pug", () => {
    return gulp
        .src([
            "./src/pug/**/**.pug", "!./src/pug/includes/**.pug"
        ])
        .pipe(
            pug({
                pretty: true,
            })
        )
        // .pipe(rewriteImagePath({
        //     path: "build/images",
        // }))
        .pipe(gulp.dest("./dist/"))
});



gulp.task('clean', () => {
    return del('dist/includes', {
        force: true
    });
});


gulp.task("html", gulp.series("pug", "clean"));

/* ======================================================================================================
 * Tarea sobre los Estilos SCSS
 * ======================================================================================================*/

gulp.task("sass", () => {
    return gulp
        .src("./src/scss/main.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(
            cssmin().on("error", function(err) {
                console.log(err);
            })
        )

    .pipe(
        purgecss({
            content: ["./src/**/*.pug", "./src/js/**/**.js"],
            // content: ["./src/**/*.pug"],
            css: ["./dist/css/styles.min.css"],
        })
    )

    .pipe(autoprefixer({
            browsers: ["last 2 versions"],
            cascade: false
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("./src/css/"))
        .pipe(notify({
            title: "SCSS",
            message: "OK"
        }))
        .pipe(browserSync.stream());
});

/* ======================================================================================================
 * Tarea sobre css minify
 * ======================================================================================================*/

gulp.task("minifyCSS", () => {
    return gulp
        .src("./src/css/*.css")

    .pipe(cssmin())
        .pipe(concat("styles.min.css"))
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.stream());
});

/* ======================================================================================================
 * Tarea sobre minify image
 * ======================================================================================================*/
gulp.task("img", () => {
    return gulp
        .src("./src/img/**/**.*")
        // .pipe(imagemin())
        .pipe(gulp.dest("./dist/img/"));

});

/* ======================================================================================================
 * Tarea para crear imagenes webp
 * ======================================================================================================*/

gulp.task("exportWebP", () => {
    let src = "./src/img/**/*.{jpg,jpeg,png}";
    let dest = "./src/img/";
    let destDist = "./dist/img/";

    return gulp
        .src(src)
        .pipe(
            imagemin([
                webp({
                    quality: 75,
                }),
            ])
        )
        .pipe(extReplace(".webp"))
        .pipe(gulp.dest(dest))
        .pipe(gulp.dest(destDist));
});

/* ======================================================================================================
 * Tarea sobre los Scripts
 * ======================================================================================================*/
gulp.task("scripts", () => {
    return gulp
        .src("./src/js/**/**.js")

    .pipe(uglifyes())
        .pipe(concat("scripts.min.js"))
        .pipe(gulp.dest("./dist/js/"));
});

/* ======================================================================================================
 * Send Fonts and Images
 * ======================================================================================================*/
gulp.task("pastefiles", () => {
    return src("./src/fonts/**/**.*").pipe(gulp.dest("./dist/fonts/")),
        src("./src/img/**/**.*").pipe(gulp.dest("./dist/img/"));

});

/* ======================================================================================================
 * Tarea por default
 * ======================================================================================================*/
gulp.task("watch", () => {
    gulp.watch("./src/scss/**/**.scss", gulp.series("sass"));
    gulp.watch("./src/css/**/**.css", gulp.series("minifyCSS"));
    gulp.watch("./src/js/**/**.js", gulp.series("scripts"));
    gulp.watch("./src/pug/**/*.pug", gulp.series("pug"));
    gulp.watch("./src/img/**/**.*", gulp.series("img"));
    gulp.watch("./src/fonts/*", gulp.series("pastefiles"));
    gulp.watch("./dist/");
    // gulp.watch("./dist/").on("change", browserSync.reload);
});

/* ======================================================================================================
 * Browser Sync
 * ======================================================================================================*/
gulp.task("browser-sync", () => {
    browserSync.init({
        injectChanges: true,
        files: ["./dist/**/*.{html,css,js}"],
        server: "./dist",
    });

    gulp.watch("./src/", gulp.series("watch"));
    gulp.watch("./dist/").on("change", browserSync.reload);
});

/* ======================================================================================================
 * Default Task
 * ======================================================================================================*/

gulp.task(
    "default",
    gulp.series(
        "pug",
        "sass",
        "html",
        "scripts",
        "minifyCSS",
        "img",
        "exportWebP",
        "pastefiles",
        "watch",
        "browser-sync"
    )
);