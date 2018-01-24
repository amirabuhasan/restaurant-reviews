var gulp = require('gulp');
var eslint = require('gulp-eslint');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task('default', function() {
  console.log("hello world!");
});

gulp.task("styles", function(done) {
  gulp.src("sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(gulp.dest("./css"))
    done();
});
