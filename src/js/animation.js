setTimeout(() => {
    const nameEl = document.getElementById('name')
    nameEl.classList += 'fadeInDown'
}, 3500)

setTimeout(() => {
    const nameEl = document.getElementById('subtitle')
    nameEl.classList += 'fadeInDown'
}, 3700)

setTimeout(() => {
    const iconEls = document.querySelectorAll('img')
    iconEls.forEach(el => el.classList += 'fadeInLeft');
}, 3800)