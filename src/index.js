import './scss/index.scss'

import Vivus from 'vivus'

const gradientEl = document.getElementById('gradient-target')

const num = Math.floor(Math.random() * 13) + 1
const gradientClass = `gradient-${num}`

gradientEl.className = gradientClass

setTimeout(() => {
    const nameEl = document.getElementById('name')
    nameEl.classList += 'fadeInDown'
}, 1500)

setTimeout(() => {
    const nameEl = document.getElementById('subtitle')
    nameEl.classList += 'fadeInDown'
}, 1700)

setTimeout(() => {
    const iconEls = document.querySelectorAll('img')
    iconEls.forEach(el => el.classList += 'fadeInLeft');
}, 1800)

new Vivus('logo', {
    duration: 70,
});