import './../../App.css'
import React, { Component } from 'react';
//import { Players } from './Players'
import TeamPaginator from '../paginators/TeamPaginator'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class Teams extends Component {
    constructor(props) {
        super(props);

        this.state = {
             team: ""
            };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        const formData = new FormData(event.target),
                formDataObj = Object.fromEntries(formData.entries())
        this.setState({team:formDataObj.team})
        event.preventDefault();
    };
    render() {
        return (
                <div  className="page">
                    <h1 className="titleTexts">Search for a team in FIFA 21</h1>
                    <Form className="d-flex" onSubmit={this.handleSubmit}>
                        <FormControl
                            type="search"
                            name="team"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            style={{width:"60%"}}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                    <br></br>
                    <TeamPaginator team={this.state.team}/>
                </div>
            );
    }
}
export default Teams;