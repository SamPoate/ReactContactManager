import React, { Component } from 'react';
import Contact from './Contact';

import { Consumer } from '../context';

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
