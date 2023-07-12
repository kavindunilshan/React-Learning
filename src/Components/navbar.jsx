import React, { Component } from 'react'

class NavBar extends Component {
    render() { 
        return (
            <React.Fragment>
                <nav className='navbar navbar-light bg-light'>
                    <a className='navbar-brand'>
                        NavBar {this.props.counter.length}
                    </a>
                </nav>
            </React.Fragment>
        );
    }
}
export default NavBar;
