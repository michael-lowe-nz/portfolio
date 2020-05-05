import { h, render, Component } from 'preact'
import Router from 'preact-router'

import './scss/index.scss'

import Home from './components/Home'
import Contact from './components/Contact'


const num = Math.floor(Math.random() * 13) + 1
const gradientClass = `gradient-${num}`

const App = () => (
    <div className={gradientClass + " gradient-target"}>
        <Router>
            <Home path="/" />
            <Contact gradientClass={gradientClass} path="/contact" />
        </Router>
    </div>
)

render(<App />, document.body)