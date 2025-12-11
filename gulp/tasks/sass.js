module.exports = function () {
  $.gulp.task("sass:main", function () {
    return $.gulp
      .src("src/static/css/main.scss", { sourcemaps: true })
      .on(
        "error",
        $.gp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "style",
        })
      )
      .pipe($.sass({ outputStyle: "expanded" }))
      .pipe(
        $.gp.autoprefixer({
          Browserslist: ["defaults"],
        })
      )
      .pipe($.gulp.dest("build/css/"))
      .pipe($.sass({ outputStyle: "compressed" }))
      .pipe($.gp.rename("main.min.css"))
      .pipe($.gulp.dest("build/css/", { sourcemaps: "./" }));
  });

  $.gulp.task("sass:blocks", function () {
    return $.gulp
      .src("src/static/css/blocks/*.scss", { sourcemaps: true })
      .on(
        "error",
        $.gp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "style",
        })
      )
      .pipe($.sass({ outputStyle: "expanded" }))
      .pipe(
        $.gp.autoprefixer({
          Browserslist: ["defaults"],
        })
      )
      .pipe($.gulp.dest("build/css/blocks/"))
      .pipe($.sass({ outputStyle: "compressed" }))
      .pipe(
        $.gp.rename(function (path) {
          path.basename += ".min";
        })
      )
      .pipe($.gulp.dest("build/css/blocks/", { sourcemaps: "./" }));
  });

  $.gulp.task("sass:pages", function () {
    return $.gulp
      .src("src/static/css/pages/*.scss", { sourcemaps: true })
      .on(
        "error",
        $.gp.notify.onError({
          message: "Error: <%= error.message %>",
          title: "style",
        })
      )
      .pipe($.sass({ outputStyle: "expanded" }))
      .pipe(
        $.gp.autoprefixer({
          Browserslist: ["defaults"],
        })
      )
      .pipe($.gulp.dest("build/css/pages/"))
      .pipe($.sass({ outputStyle: "compressed" }))
      .pipe(
        $.gp.rename(function (path) {
          path.basename += ".min";
        })
      )
      .pipe($.gulp.dest("build/css/pages/", { sourcemaps: "./" }));
  });

  $.gulp.task(
    "sass",
    $.gulp.series($.gulp.parallel("sass:main", "sass:blocks", "sass:pages"), function (done) {
      $.bs.reload();
      done();
    })
  );
};
