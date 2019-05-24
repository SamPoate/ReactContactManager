import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            //TODO spread operator ...
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        default:
            return state;
    }
};

export class Provider extends Component {
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
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
