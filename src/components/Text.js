import { Component } from 'preact'
import { Link } from 'preact-router/match'

import github_logo from '../assets/GitHub-Mark-Light-120px-plus.png'
import linkedin_logo from '../assets/In-White-66px-R.png'
import message_icon from '../assets/message-64.png'

class Text extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.baseDelay = 1000
    }

    componentDidMount() {
        setTimeout(() => this.setState({ title: true }), this.baseDelay)
        setTimeout(() => this.setState({ subtitle: true }), this.baseDelay + 100)
        setTimeout(() => this.setState({ github: true }), this.baseDelay + 200)
        setTimeout(() => this.setState({ linkedin: true }), this.baseDelay + 400)
        setTimeout(() => this.setState({ contact: true }), this.baseDelay + 500)
    }

    render() {
        const { title, subtitle, github, linkedin, contact } = this.state
        return (
            <div className="text" style={{ zIndex: 10 }}>
                <h1
                    className={title ? 'fadeInDown' : ''}
                    style={{ visibility: title ? 'visible' : 'hidden' }}>
                    michael lowe
                </h1>
                <p
                    className={subtitle ? 'fadeInDown' : ''}
                    style={{ visibility: subtitle ? 'visible' : 'hidden' }}>
                    web developer.
                </p>
                <div className="icons">
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/michael-lowe-nz">
                        <img
                            src={github_logo}
                            alt="GitHub"
                            className={github ? 'fadeInDown' : ''}
                            style={{ visibility: github ? 'visible' : 'hidden' }}
                        />
                    </a>
                    <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/michael-lowe-b7611784/">
                        <img
                            src={linkedin_logo}
                            alt="LinkedIn"
                            className={linkedin ? 'fadeInDown' : ''}
                            style={{ visibility: linkedin ? 'visible' : 'hidden' }}
                        />
                    </a>
                    <Link href="/contact">
                        <img
                            src={message_icon}
                            alt="Contact"
                            className={contact ? 'fadeInDown' : ''}
                            style={{ visibility: contact ? 'visible' : 'hidden' }}
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Text
