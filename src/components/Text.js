import { h, Component } from 'preact'
import { Link } from 'preact-router/match';

import github_logo from '../assets/GitHub-Mark-Light-120px-plus.png'
import linkedin_logo from '../assets/In-White-66px-R.png'
import message_icon from '../assets/message-64.png'

class Text extends Component {
    constructor(props) {
        super(props)
        this.baseDelay = 1000
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                title: true
            })
        }, this.baseDelay)
        setTimeout(() => {
            this.setState({
                subtitle: true
            })
        }, this.baseDelay + 100)
        setTimeout(() => {
            this.setState({
                github: true
            })
        }, this.baseDelay + 200)
        setTimeout(() => {
            this.setState({
                linkedin: true
            })
        }, this.baseDelay + 400)
        setTimeout(() => {
            this.setState({
                contact: true
            })
        }, this.baseDelay + 500)
    }
    render() {
        return (
            <div className="text" style={{zIndex: 10}}>
                <h1
                    className={this.state.title && "fadeInDown"}
                    style={{visibility: this.state.title ? 'visible' : 'hidden'}}
                    id="name">
                    michael lowe
                </h1>
                <p style={{visibility: this.state.subtitle ? 'visible' : 'hidden'}} className={this.state.subtitle && "fadeInDown"} id="subtitle">web developer.</p>
                <div className="icons">
                    <a target="_blank" href="https://github.com/michael-lowe-nz">
                        <img style={{visibility: this.state.github ? 'visible' : 'hidden'}} src={github_logo} className={this.state.github && "fadeInDown"} />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/michael-lowe-b7611784/">
                        <img style={{visibility: this.state.linkedin ? 'visible' : 'hidden'}} className={this.state.linkedin && "fadeInDown"} src={linkedin_logo} />
                    </a>
                    <Link activeClassName="active" href="/contact">
                        <img style={{visibility: this.state.contact ? 'visible' : 'hidden'}} className={this.state.contact && "fadeInDown"} src={message_icon} />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Text