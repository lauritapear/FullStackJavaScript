'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task("concatScripts", function(){
  console.log("hello!!");
  gulp.src(['js/jquery.js',
'js/sticky/jquery.sticky.js',
'js/main.js'])
.pipe(concat("app.js"))
.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function()
{
  gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("default", ["hello"], function()
{
  console.log("this is the default task");
})
