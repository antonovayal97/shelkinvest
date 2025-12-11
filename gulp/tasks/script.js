module.exports = function () {
  $.gulp.task("scripts:lib", function () {
    return $.gulp
      .src("src/static/libs/**")
      .pipe($.gulp.dest("build/libs/"))
      .pipe(
        $.bs.reload({
          stream: true,
        })
      );
  });

  $.gulp.task("scripts", function () {
    return $.gulp
      .src("src/static/js/**")
      .pipe($.gulp.dest("build/js/"))
      .pipe(
        $.bs.reload({
          stream: true,
        })
      );
  });
};
