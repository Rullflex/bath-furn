import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()
    document.querySelectorAll(`.popup__nav-link`).forEach( (elem, idx) => {
        elem.addEventListener(`click`, (event) => {
            UIkit.modal('#menu').hide()
        })
    })
})
