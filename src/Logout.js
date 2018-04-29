import React from 'react';
import ReactDOM from 'react-dom';

class LogoutButton extends React.Component {
    render(){
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    }
}
export {
    LogoutButton
}
