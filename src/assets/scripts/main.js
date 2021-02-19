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

    const slidegal = (section) => {
        document.querySelectorAll(`.s${section} .slidegal-item`).forEach((el, key, parent) => {
            el.addEventListener(`click`, (event) => {
                const target = event.currentTarget
                
                if (!target.classList.contains(`active`)) {
                    parent.forEach((el, index) => {
                        if (el === target) {
                            UIkit.slider(`.s${section}__slider`).show(index)
                        }
                    })
                }
            })
        })
        document.querySelectorAll(`.s${section}__slider .uk-slider-items > li`).forEach((el, idx) => {
            
            el.addEventListener(`beforeitemshow`, (event) => {
                const target = event.target
                const prev = event.target.previousSibling
    
                const showTabNav = (index) => {
                    document.querySelectorAll(`.s${section} .slidegal-item`).forEach((el, idx) => {
                        if (idx === index) {
                            el.classList.add(`active`)
                        } else {
                            el.classList.remove(`active`)
                        }
                    })
                }
    
                showTabNav([...target.parentElement.children].indexOf(target))
    
            })
        })
    }
    
    slidegal(2)
    slidegal(4)
})
