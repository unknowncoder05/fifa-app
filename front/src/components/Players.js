import React, { Component } from 'react';

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players:props.players,
            team:props.team
            };
    }
    players(){
        this.state.players.map((player) =>{
            let team = null
            if(this.state.team){
                team = (
                    <tc> 
                        {player.team}
                    </tc>)
            }
            return (
                <tr> 
                    <tc> 
                        {player.name}
                    </tc>
                    <tc> 
                        {player.position}
                    </tc>
                    <tc> 
                        {player.nation}
                    </tc>
                    { team }
                    
                </tr>
            )
        }
        )
    }
    render() {
        return ( this.state.players );
    }
}
export default Players;