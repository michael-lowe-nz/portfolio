import { Component } from 'preact'

import github_logo from '../assets/GitHub-Mark-Light-120px-plus.png'
import linkedin_logo from '../assets/In-White-66px-R.png'
import message_icon from '../assets/message-64.png'

// Module-level flag so the intro animation only plays once per page load,
// regardless of how many times the Home component mounts/unmounts.
let hasAnimated = false

class Text extends Component {
    constructor(props) {
        super(props)
        this.state = hasAnimated
            ? { card: true, title: true, subtitle: true, github: true, linkedin: true, contact: true }
            : {}
    }

    componentDidMount() {
        if (hasAnimated) return
        hasAnimated = true

        // Card floats in first, then content staggers inside it
        setTimeout(() => this.setState({ card: true }),     200)
        setTimeout(() => this.setState({ title: true }),    500)
        setTimeout(() => this.setState({ subtitle: true }), 600)
        setTimeout(() => this.setState({ github: true }),   700)
        setTimeout(() => this.setState({ linkedin: true }), 850)
        setTimeout(() => this.setState({ contact: true }),  1000)
    }

    render() {
        const { card, title, subtitle, github, linkedin, contact } = this.state
        const { onRefreshGradient, refreshing } = this.props
        return (
            <div className={`text${card ? ' fadeInDownSubtle' : ''}`} style={{ zIndex: 10 }}>
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
                    <a href="mailto:info@michaellowe.nz">
                        <img
                            src={message_icon}
                            alt="Email"
                            className={contact ? 'fadeInDown' : ''}
                            style={{ visibility: contact ? 'visible' : 'hidden' }}
                        />
                    </a>
                    <button
                        className={`refresh-btn${refreshing ? ' spinning' : ''}`}
                        onClick={onRefreshGradient}
                        aria-label="Change background gradient"
                        disabled={refreshing}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <polyline points="23 4 23 10 17 10" />
                            <polyline points="1 20 1 14 7 14" />
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Text
