import React, { Component } from 'react';
import PlayersPaginator from './PlayersPaginator'
class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
                <div>
                    <PlayersPaginator/>
                </div>
            );
    }
}
export default Players;