import "./css/normalize.css"
import "./css/css.css"
import "./sass/form-inputs.scss"
import "./css/medias.css"
//  datepicker-polyfill for ie11 - https://github.com/brianblakely/nodep-date-input-polyfill
import "./datepicker-polyfill";


[].slice.call(document.querySelectorAll('.pizza-select select')).forEach(v => {
    v.addEventListener('click', function () {
        this.style.color = "rgb(68,68,68)";
    })
    // remove selection in ie
    v.addEventListener('change', function () {
        this.blur();
    })
});

[].slice.call(document.querySelectorAll('.checkbox-container')).forEach(v => {
    v.addEventListener('click', function () {
        this.querySelector('.checkbox-box span').classList.toggle('toggle-check');
        this.querySelector('input').checked = this.querySelector('input').checked ? false : true;

    })
});

