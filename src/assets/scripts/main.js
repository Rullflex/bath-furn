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
    
    // slidegal(2)
    slidegal(4)

    UIkit.scrollspy(`#video`)
    document.querySelector(`#video`).addEventListener(`inview`, (event) => {
        document.querySelector(`#video .popup__body`).insertAdjacentHTML(`beforeend`, `<iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/c2pz2mlSfXA" frameborder="0" allowfullscreen="true" data-uk-video data-uk-responsive"></iframe>`)
    })

    document.querySelectorAll(`a[href="tel:89819810880"]`).forEach( (elem, idx) => {
        elem.addEventListener(`click`, (event) => {
            ym(72788506,'reachGoal','call')
        })
    })
})
