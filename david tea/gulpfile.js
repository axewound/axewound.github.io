var gulp = require('gulp'),

    sass = require('gulp-sass'),

    autoprefixer = require('gulp-autoprefixer');
    browserSync = require('browser-sync');

gulp.task('sass', () => {
  return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
  gulp.watch('app/sass/*.sass', gulp.parallel('sass'))
  gulp.watch('app/*.html').on('change', browserSync.reload)
});

gulp.task('default', gulp.series('watch'), () => { });



