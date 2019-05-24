import React from 'react';
import PropTypes from 'prop-types';

//TODO Arrow functions
const Header = props => {
    const { branding } = props;
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
            <div className='container'>
                <a href='/' className='navbar-brand'>
                    {branding}
                </a>
                <div>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

//Objects below
//Default Props - Falls back to this if nothing set
Header.defaultProps = {
    branding: 'My App'
};

//This tells what it is to expect from the properties i.e. this is a validation check to make sure it's a string
Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
