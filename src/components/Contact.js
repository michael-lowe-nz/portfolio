import { h, Component } from 'preact'
import { Link } from 'preact-router/match';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class Contact extends Component {
    componentDidMount() {
        this._kwes_script.addEventListener('load', () => {
            this.setState({scriptLoaded: true})
        });
    }
    render() {
        return (
            <div>
                <Link className="close" href="/"></Link>
                <div class="kwes-form form-holder">
                    {this.state.scriptLoaded ?
                    <form method="POST" action="https://kwes.io/api/foreign/forms/umFicRwxPwoDwzOZqOdL">
                        <field>
                            <label for="name">Name</label>
                            <input type="text" required name="name"/>
                        </field>
                        <field>
                            <label for="email">Email</label>
                            <input type="email" required name="email"/>
                        </field>
                        <field>
                            <label for="enquiry">Enquiry</label>
                            <textarea rows="4" required name="enquiry"></textarea>
                        </field>
                        <button type="submit">ENQUIRE!</button>
                        
                    </form>
                    :
                    <Loader style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} type="Oval" color="#00BFFF" height={80} width={80} />
                    }
                    <script ref={(c) => this._kwes_script = c} src="https://kwes.io/js/kwes.js" />
                </div>

            </div>
        )
    }
}

export default Contact