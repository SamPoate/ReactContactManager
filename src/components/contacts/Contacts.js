import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../../context';

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;

                    return (
                        //TODO Map (loops through)
                        //React Fragment removes the outter div if it isn't needed
                        <React.Fragment>
                            <h1 className='display-4 mb-2'>
                                <span className='text-danger'>Contact</span>{' '}
                                List
                            </h1>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
