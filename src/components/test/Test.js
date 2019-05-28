import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    title: data.title,
                    body: data.body
                })
            );
    }

    // //Call API requests / AJAX calls with component did mount
    // componentDidMount() {
    //     console.log('component did mount');
    // }

    // //Getting deprecrated
    // componentWillMount() {
    //     console.log('component will mount');
    // }

    render() {
        const { title, body } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default Test;
