var gulp = require('gulp');
var fs = require('fs');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');

gulp.task('default', function() {
  console.log('Default Gulp');
});

gulp.task('server', function() {
  console.log('Starting livereload server...');
  gulp.src('sample/jsunittestingsample/static/js/app/**.js')
    .pipe(watch())
    .pipe(livereload());
});

gulp.task('test', function() {
  return gulp.watch('sample/jsunittestingsample/static/js/**.js', function(e) {
        var child = spawn("testem", [], {cwd: process.cwd()}),
            stdout = '',
            stderr = '';

        child.stdout.setEncoding('utf8');

        child.stdout.on('data', function (data) {
            stdout += data;
            gutil.log(data);
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) {
            stderr += data;
            gutil.log(gutil.colors.red(data));
            gutil.beep();
        });

        child.on('close', function(code) {
            gutil.log("Done with exit code", code);
            gutil.log("You access complete stdout and stderr from here"); // stdout, stderr
        });
        e();

    });
});

gulp.task('testci', function() {
  return gulp.watch('sample/jsunittestingsample/static/js/**.js', function(e) {
        var child = spawn("testem", ['ci'], {cwd: process.cwd()}),
            stdout = '',
            stderr = '';

        child.stdout.setEncoding('utf8');

        child.stdout.on('data', function (data) {
            stdout += data;
            gutil.log(data);
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) {
            stderr += data;
            gutil.log(gutil.colors.red(data));
            gutil.beep();
        });

        child.on('close', function(code) {
            gutil.log("Done with exit code", code);
            gutil.log("You access complete stdout and stderr from here"); // stdout, stderr
        });
        e();

    });
});

gulp.task('clean', function() {
  return gulp.src('sample/jsunittestingsample/static/build', {read: false})
    .pipe(clean());
});

gulp.task('build', function(cb) {
  //runSequence(
  //  'clean',
  //  ['less','js_build', 'coffeescript']
  //);
  console.log("This is the build task.");
});
