import logo from '../assets/logo.svg'
import Vivus from 'vivus'

const animation = new Vivus('logo', {
    file: logo,
    // duration: 70,
});

setTimeout(() => {
    animation.play(-1)
}, 2000)