import React from 'react';
import ReactDOM from 'react-dom';

class LoginButton extends React.Component {
    render() {
        return(
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }
}
export{
    LoginButton
}
