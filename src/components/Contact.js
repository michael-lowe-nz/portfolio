import { Component, createRef } from 'preact'
import { Link } from 'preact-router/match'
import { Oval } from 'react-loader-spinner'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = { scriptLoaded: false }
        this.scriptRef = createRef()
    }

    componentDidMount() {
        const script = this.scriptRef.current
        if (script) {
            script.addEventListener('load', () => this.setState({ scriptLoaded: true }))
        }
    }

    render() {
        return (
            <div>
                <Link className="close" href="/" />
                <div className="kwes-form form-holder">
                    {this.state.scriptLoaded ? (
                        <form method="POST" action="https://kwes.io/api/foreign/forms/umFicRwxPwoDwzOZqOdL">
                            <field>
                                <label for="name">Name</label>
                                <input type="text" required name="name" />
                            </field>
                            <field>
                                <label for="email">Email</label>
                                <input type="email" required name="email" />
                            </field>
                            <field>
                                <label for="enquiry">Enquiry</label>
                                <textarea rows="4" required name="enquiry" />
                            </field>
                            <button type="submit">ENQUIRE!</button>
                        </form>
                    ) : (
                        <Oval
                            wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                            color="#00BFFF"
                            height={80}
                            width={80}
                        />
                    )}
                    <script ref={this.scriptRef} src="https://kwes.io/js/kwes.js" />
                </div>
            </div>
        )
    }
}

export default Contact
