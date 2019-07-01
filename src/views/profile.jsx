import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

import ProfileClass from '../components/ProfileClass'
import ProfileFunction from '../components/ProfileFunction'

class Profile extends Component {
    state = {
        user: 'Dan'
    }

    render() {
        return (
            <Fragment>
                <label>
                    <b>Choose profile to view: </b>
                    <select
                        value={this.state.user}
                        onChange={e => this.setState({ user: e.target.value })}
                    >
                        <option value="Dan">Dan</option>
                        <option value="Sophie">Sophie</option>
                        <option value="Sunil">Sunil</option>
                    </select>
                </label>

                <p>
                    <ProfileFunction user={this.state.user} />
                    <b> (function)</b>
                </p>
                <p>
                    <ProfileClass user={this.state.user} />
                    <b> (class)</b>
                </p>
            </Fragment>
        );
    }
}

ReactDOM.render(
    <Profile/>,
    document.querySelector('#root')
)