import './../../App.css'
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert  from 'react-bootstrap/Alert';
import Api from '../../Utils/Api'
class AuthKey extends Component {
    constructor(props) {
        super(props);
        console.log("key:",localStorage.getItem('ApiKey'))
        this.state = {
            players:props.players,
            team:props.team,
            msg:"",
            show:false
        };
        this.Api = new Api()
        
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.Api.testKey()
        .then((res)=>{
            this.setState({show:false})
        })
        .catch((err)=>{
            this.setState({show:true})
        })
    }
    handleClose(){
        this.setState({show:false})
    };
    handleSubmit(event){
        const formData = new FormData(event.target),
                formDataObj = Object.fromEntries(formData.entries())
        this.Api.setKey(formDataObj.apikey)
        .then((res)=>{
            this.setState({show:false})
            window.location.reload()
        })
        .catch((err)=>{
            this.setState({error:true})
        })
        
        
        event.preventDefault();
    };
    render() {
        let error = ""
        if(this.state.error){
            error = (
            <Alert variant="danger">
                Invalid Api Key
            </Alert>
            )
        }
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                    {error}
                        This aplication is protected using Api Keys, if you don't have one, ask the Admin!
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Control type="password" name="apikey" placeholder="Api Key" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Button variant="outline-success" type="submit" >
                                Login
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                
            </div>

        );
    }
}
export default AuthKey;