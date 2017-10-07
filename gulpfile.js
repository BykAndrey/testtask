 var gulp =require('gulp'),
 	less=require('gulp-less'),
 	browser=require('browser-sync')
 	autoprefix=require('gulp-autoprefixer');



gulp.task('less',function(){
	return gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(autoprefix({
		browsers:['last 2 versions'],
		cascade:true
	}))
	.pipe(browser.reload({stream:true}))
	.pipe(gulp.dest('app/css'));
});
gulp.task('browser',function(){
	browser({
		server:{
			baseDir:'app'
		},

	})
})
gulp.task('watch',['browser'],function(){
	gulp.watch('app/less/*.less',['less']);
	gulp.watch('app/*.html',browser.reload);
	gulp.watch('app/js/*.js',browser.reload);
});