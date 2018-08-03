import './scss/index.scss'

const gradientEl = document.getElementById('gradient-target')

const num = Math.floor(Math.random() * 10) + 1
const gradientClass = `gradient-${num}`

gradientEl.className = gradientClass

setTimeout(() => {
    const nameEl = document.getElementById('name')
    nameEl.classList += 'fadeInDown'
}, 500)

setTimeout(() => {
    const nameEl = document.getElementById('subtitle')
    nameEl.classList += 'fadeInDown'
}, 700)