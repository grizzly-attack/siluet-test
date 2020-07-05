"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var postcss = require("gulp-postcss");

gulp.task("css", function () {
  return gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "",
    notify: false,
    open: true,
    cors: true,
    ui: false,
    index: "index.html"
  });

  gulp.watch("sass/**/*.scss", gulp.series("css"));
  gulp.watch("*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));
