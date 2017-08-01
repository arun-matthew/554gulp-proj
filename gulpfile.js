var gulp = require('gulp');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');


gulp.task('compass', function() {
  gulp.src('scss/style.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'app/css',
      sass: 'scss'
    }))
    .pipe(autoprefixer('last 10 version'))
    .pipe(gulp.dest('app/css'))
    .pipe(notify({message : 'css changed'}));
});


gulp.task('watch' , function(){

	gulp.watch('scss/**/*.scss' , ['compass']);

});


gulp.task('default' , ['compass' , 'watch']);
