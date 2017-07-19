var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');
	bs = require('browser-sync').create(),
	sassGlob = require('gulp-sass-glob');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/main.scss')
  	.pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'))
    .pipe(bs.stream());
});

gulp.task('webpack', function(done) {
    webpack(
	    {
	    	entry: './src/scripts/main.js',
			output: {
				path: __dirname + "/app",
				filename: 'app.bundle.js'
			},
	        
	    },
	    function(error) {
	        var pluginError;
	        if (error) {
	            pluginError = new gulpUtil.PluginError('webpack', error);
	 
	            if (done) {
	                done(pluginError);
	            } else {
	                gulpUtil.log('[webpack]', pluginError);
	            }
	 
	            return;
	        }
	 
	        if (done) {
	            done();
	        }
	    }
    );
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function(){
	bs.init({
		server: './app'
	});
	gulp.watch('./app/*.{html,js}').on('change', bs.reload);
	//bs.watch(__dirname + '/app/**/*.*').on('change', bs.reload);
});

gulp.task('default', ['webpack', 'watch', 'serve']);