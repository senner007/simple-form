import "./css/normalize.css"
import "./sass/css.scss"
import "./sass/form-inputs.scss"
import "./sass/medias.scss"
//  datepicker-polyfill for ie11 - https://raw.githubusercontent.com/jcgertig/date-input-polyfill/master/date-input-polyfill.dist.js
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
        this.querySelector('.checkbox-box div').classList.toggle('toggle-check');
        this.querySelector('input').checked = this.querySelector('input').checked ? false : true;

    })
});

