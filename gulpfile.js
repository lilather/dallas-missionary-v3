const { src, dest, parallel } = require('gulp');
const gulp = require('gulp');
var ghPages = require('gulp-gh-pages-with-updated-gift');
const plugins = require('gulp-load-plugins')()

function pug() {
  return src( ["./src/pug/*"]).pipe(plugins.watch('./src/pug/*.pug')).pipe(plugins.pug()).pipe(dest('./src/'));
}


function sass() {
  return src( ["./src/scss/*"]).pipe(plugins.watch('./src/scss/*.scss')).pipe(plugins.sass()).pipe(dest('./src/css'));
}

function css() {
  return src("./src/css/main.css")
  .pipe((plugins.cleanCss())).pipe(plugins.purgecss({ content: ["./src/index.html"],safelist:['showBackToTop'] })).pipe(dest('./dist/css/')).pipe(plugins.gzip()).pipe(gulp.dest("./dist/css/"));
}


function js(){ 
return src('./src/js/main.js').pipe(plugins.babel({
    presets: ['@babel/env']})).pipe(gulp.dest('./dist/js/'))
  } 

function html(){
return src('./src/*html').pipe(plugins.htmlclean()).pipe(gulp.dest('./dist/'))
}

function img(){
  return src('./src/img/*').pipe(plugins.imagemin()).pipe(gulp.dest('./dist/img/')).pipe(plugins.webp()).pipe(gulp.dest('./dist/img/'));
  }
  

function deploy(){
    return src("./dist/**/*").pipe(ghPages())
  
  }


exports.deploy=deploy;
exports.pug=pug;
exports.sass=sass;
exports.js=js;
exports.css=css;
exports.img= img;
exports.html=html;
exports.dev = parallel(pug, sass);
exports.dist = parallel(pug, sass, img, js,css,html);