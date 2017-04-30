var gulp = require("gulp"),
htmlmin = require("gulp-html-minifier"),
cssmin = require("gulp-csso"), 
uncss = require("gulp-uncss"), 
dist = "production/";

gulp.task("min-css", function(){
	
	gulp.src("css/style.css")
	.pipe(cssmin())
	.pipe(gulp.dest(dist + "/css"));
	
});

gulp.task("uncss", function () {
	
    return gulp.src("css/style.css")
        .pipe(uncss({
            html: ['index.html', 'posts/**/*.html', 'http://example.com']
        }))
        .pipe(gulp.dest(dist + "/css"));
		
});

gulp.task("min-html", function(){
	
    gulp.src("index.html")
	.pipe(htmlmin({
			
		collapseBooleanAttributes: true,
		collapseWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		processConditionalComments: true,
		removeComments: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		
	}))
	.pipe(gulp.dest(dist));
	
});

gulp.task("default", ["min-html", "min-css"]);