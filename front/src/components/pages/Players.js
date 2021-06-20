import './../../App.css'
import React, { Component } from 'react';
import PlayersPaginator from '../paginators/PlayersPaginator'
class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
                <div>
                    <h1>This are all the players in FIFA 21</h1>
                    <PlayersPaginator/>
                </div>
            );
    }
}
export default Players;