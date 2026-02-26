import React from 'react'

const Greeting = (props) => {
    const welcomeMsg = <div className='greeting'>
        <p>Welcome! <span className='user-name'>@{props.userName}</span></p>
    </div>
    
    const logInMsg = <div className='greeting'>
        <p>Please Login to continue</p>
    </div>

    return(props.isLoggedIn ? welcomeMsg : logInMsg)
}

export default Greeting