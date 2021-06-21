import './../App.css'
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';

class Player extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            player:props.player,
            show: false
        };
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(){
        this.setState({show:false})
    }
    renderDescription(){
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title className="propertyText">{this.state.player.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div >
                            <div >
                                <b className="propertyText">Nation:</b> {this.state.player.nation}
                                <br></br>
                                <b className="propertyText">Position:</b> {this.state.player.position}
                                <br></br>
                                <b className="propertyText">Team:</b> {this.state.player.team}
                            </div>
                            <div>
                                <Card.Img style ={{marginTop:"30px"}} onClick={()=>{this.setState({show:true})}} variant="top" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
                            </div>
                        
                        </div>

                    
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
    render() {
        return (
                <Card  style={{ width: '10rem', margin:'10px'}}>
                    <Card.Img className="playerCard" onClick={()=>{this.setState({show:true})}} variant="top" src="https://www.pngitem.com/pimgs/m/512-5127470_custom-fifa-player-card-hd-png-download.png" />
                    <Card.Body>
                    <Card.Title className="propertyText">{this.props.player.name}</Card.Title>
                    <Card.Text>
                        <b className="propertyText">Position:</b> {this.props.player.position}
                    </Card.Text>
                    </Card.Body>
                    {this.renderDescription()}
                </Card>
            );
    }
}
export default Player;