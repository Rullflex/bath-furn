import 'lazysizes'
import UIkit from 'uikit'
import { App } from '../../modules/scripts/_core'


document.addEventListener(`DOMContentLoaded`, function () {
    const app = new App()
    app.init()
    document.querySelectorAll(`.popup__nav-link`).forEach( (elem) => {
        elem.addEventListener(`click`, () => {
            UIkit.modal('#menu').hide()
        })
    })

    const slidegal = (section) => {
        document.querySelectorAll(`.s${section} .slidegal-item`).forEach((el, unused, parent) => {
            el.addEventListener(`click`, (event) => {
                UIkit.slider(`.s${section}__slider`).show(app.indexOfElements(event.currentTarget, parent))
            })
        })
        app.sliderSpy(`.s${section}__slider`, index => {
            app.changeActivitySet(document.querySelectorAll(`.s${section} .slidegal-item`), index)
        })
    }
    
    slidegal(2)
    slidegal(4)
})
