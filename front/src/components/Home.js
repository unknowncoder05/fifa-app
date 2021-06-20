import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
//import { Players } from './Players'
import Api from './../Utils/Api'
class Home extends Component {
    Api = null
    constructor(props) {
        super(props);

        this.state = {
             hello: 'hello world' 
            };
        this.Api = new Api()
        /*
        this.Api.searchPlayers("e","desc",1).then(
            (res) =>{
                console.log("RES->",res); 
            }
        )*/
        
    }

    render() {
        return (
                <div>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <h1> {this.state.hello} </h1>
                </div>
            );
    }
}
export default Home;