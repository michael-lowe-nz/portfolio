const gradientEl = document.getElementById('gradient-target')

const num = Math.floor(Math.random() * 13) + 1
const gradientClass = `gradient-${num}`

gradientEl.className = gradientClass