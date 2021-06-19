import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { hello: 'hello world' };
    }

    render() {
        return (< h1 > {this.state.hello} </h1>);
    }
}