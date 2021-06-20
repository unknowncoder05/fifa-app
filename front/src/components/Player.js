import './../App.css'
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                    <Modal.Title>{this.state.player.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <b>Nation:</b> {this.state.player.nation}
                    <br></br>
                    <b>Position:</b> {this.state.player.position}
                    <br></br>
                    <b>Team:</b> {this.state.player.team}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Card style={{ width: '10rem', margin:'10px'}} className="test">
                    <Card.Img onClick={()=>{this.setState({show:true})}} variant="top" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
                    <Card.Body>
                    <Card.Title>{this.props.player.name}</Card.Title>
                    <Card.Text>
                        <b>Position:</b> {this.props.player.position}
                    </Card.Text>
                    </Card.Body>
                </Card>
                {this.renderDescription()}
            </div>
            );
    }
}
export default Player;