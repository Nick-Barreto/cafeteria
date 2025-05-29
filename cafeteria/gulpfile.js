const { src, dest } = require('gulp'); //invocar al archivo gulpfile
const sass = require('gulp-sass')(require('sass'));


function css( done ){
    //compiar SASS
    //pasos: 1- Identificar archivo, 2- Compilarla, 3- Guardar el .CSS
    
    src('src/scss/app.scss')
        .pipe( sass() ) 
        .pipe( dest('build/css') ) 

    done();

}

exports.css = css;