import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Api from '../Utils/Api'

//import { Players } from './Players'

class TeamPaginator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //team:props.team,
            paginationRange: 2,
            page: 1,
            totalPages: 1,
            players: [],
            items:0,
        };
        this.Api = new Api()
        this.getPage = this.getPage.bind(this)
        this.changePage = this.changePage.bind(this)
        
    }
    componentDidMount(){
        this.getPage(this.state.page)
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.team !== prevProps.team) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            this.getPage(this.state.page)
            this.forceUpdate()
        }
    } 
    getPage(pageNumber){
        this.Api.searchTeam(this.props.team, pageNumber).then(
            (res) =>{
                this.setState({players:res.data.Players, totalPages:res.data.totalPages, items:res.data.Items}) 
            }
        )
    }
    changePage(pageNumber){
        if(pageNumber>this.state.totalPages)
            return
        if(pageNumber<1)
            return
        this.setState({page:pageNumber})
        this.getPage(pageNumber)

    }
    render() {
        let pages = []
        let lowerBand = Math.max(1,this.state.page-this.state.paginationRange),
            upperBand = Math.min(this.state.totalPages+1, lowerBand+this.state.paginationRange*2+1)
        let queryAmountMsg = ""
        if(this.state.items !== 0){
            queryAmountMsg = <h3>{this.state.items} Players found</h3>
        }
        for(let i = lowerBand; i < upperBand ; i++){
            pages.push(
                <Pagination.Item key={i} active={i === this.state.page} onClick = {() => this.changePage(i)}>{i}</Pagination.Item>
            )

        }
        let players = this.state.players.map((player) =>
                <Card key={player.name} style={{ width: '10rem', margin:'10px'}} >
                    <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" />
                    <Card.Body>
                    <Card.Title>{player.name}</Card.Title>
                    <Card.Text>
                        <b>Position:</b> {player.position}
                    </Card.Text>
                    </Card.Body>
                </Card>
        )
        return (
                <div>
                    <Pagination>
                        <Pagination.First onClick = {() => this.changePage(1)}/>
                        <Pagination.Prev  onClick = {() => this.changePage(this.state.page-1)}/>
                        {pages}
                        <Pagination.Next  onClick = {() => this.changePage(this.state.page+1)}/>
                        <Pagination.Last  onClick = {() => this.changePage(this.state.totalPages)}/>
                    </Pagination>
                    {queryAmountMsg}
                    <Container fluid>
                        <Row>
                            {players}
                        </Row>
                    </Container>
                </div>
            );
    }
}
export default TeamPaginator;