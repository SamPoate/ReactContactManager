import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    //TODO Constructor -> Super
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '555-555-5555'
            },
            {
                id: 2,
                name: 'Tony Stark',
                email: 'tstark@gmail.com',
                phone: '111-555-5555'
            },
            {
                id: 3,
                name: 'Thor Odison',
                email: 'raven@gmail.com',
                phone: '222-555-5555'
            }
        ]
    };

    render() {
        const { contacts } = this.state;

        return (
            //TODO Map (loops through)
            //React Fragment removes the outter div if it isn't needed
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
