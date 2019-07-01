// Class Component
import React, { Component } from 'react'

class ProfileClass extends Component {

    showMessage = () => {
        console.log(`Class Component:: Followed ${this.props.user}`)
    }

    handleClick = () => {
        setTimeout(this.showMessage, 1000)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Follow</button>
        )
    }
}

export default ProfileClass