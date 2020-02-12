import { Component, h, createRef } from 'preact'
import logo from '../assets/logo.svg'
import Vivus from 'vivus'

class Logo extends Component {
    constructor(props) {
        super(props)
        this.logoRef = createRef();
    }
    componentDidMount() {
        const animation = new Vivus('logo', {
            file: logo,
        });
        setTimeout(() => {
            animation.play(-1)
        }, 2000)
    }
    render() {
        return (
            <div style={{
                position: 'fixed',
                top: '0',
                width: '100%',
                height: '100%',
                transition: 'opacity 1s ease',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }} class="loader">
                <div style={{ maxWidth: '200px', maxHeight: '200px' }} ref={this.logoRef} id="logo"></div>
            </div>
        )
    }
}

export default Logo