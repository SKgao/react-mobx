// Function Component
import React from 'react'

function ProfileFunction(props) {
    const showMessage = () => {
        console.log(`Function Component:: Followed ${props.user}`)
    }

    const handleClick = () => {
        setTimeout(showMessage, 1000);
    }

    return <button onClick={handleClick}>Follow</button>
}

export default ProfileFunction