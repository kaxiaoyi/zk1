/**
 * Created by Administrator on 2017/10/9.
 */
var gulp=require('gulp');
var concat =require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');


gulp.task('js',function(){
   gulp.src('js/*.js')
       .pipe(concat('main.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./js'));
});

gulp.task('css',function(){
    gulp.src('css/*.css')
        .pipe(concat('main.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css'));
});
