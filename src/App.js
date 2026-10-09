import { render } from 'preact'
import Router from 'preact-router'
import './scss/index.scss'

import Home from './components/Home'

const num = Math.floor(Math.random() * 13) + 1
const gradientClass = `gradient-${num}`

const App = () => (
    <div className={gradientClass + ' gradient-target'}>
        <Router>
            <Home path="/" />
        </Router>
    </div>
)

render(<App />, document.getElementById('app'))
