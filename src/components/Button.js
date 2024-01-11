import React from "react";

import './Button.css'
 
const Button = (props) => {

    return <button onClick={props.callApi}>

        CLICK TO GENERATE A JOKE

    </button>;
}
 
// Export Button Component

export default Button;