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
                <div className="page">
                    <h1 className="titleTexts">This are all the players in FIFA 21</h1>
                    <br></br>
                    <PlayersPaginator/>
                </div>
            );
    }
}
export default Players;