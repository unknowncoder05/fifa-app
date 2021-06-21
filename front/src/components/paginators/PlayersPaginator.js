import './../../App.css'
import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Api from '../../Utils/Api'
import Player from '../Player'

//import { Players } from './Players'

class PlayersPaginator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paginationRange: 2,
            page: 1,
            totalPages: 1,
            players: []
        };
        this.Api = new Api()
        this.getPage = this.getPage.bind(this)
        this.changePage = this.changePage.bind(this)

        
    }
    componentDidMount(){
        this.getPage(this.state.page)
    }
    getPage(pageNumber){
        this.Api.searchPlayers('','asc', pageNumber).then(
            (res) =>{
                this.setState({players:res.data.Players, totalPages:res.data.totalPages, items:res.data.totalItems}) 
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
    renderPages(){
        let lowerBand = Math.max(1,this.state.page-this.state.paginationRange),
            upperBand = Math.min(this.state.totalPages+1, lowerBand+this.state.paginationRange*2+1)
        let pages = []
        for(let i = lowerBand; i < upperBand ; i++){
            pages.push(
                <Pagination.Item key={i} active={i === this.state.page} onClick = {() => this.changePage(i)}>{i}</Pagination.Item>
            )

        }
        return pages
    }
    renderPlayers(){
        let queryAmountMsg = ""
        let players = this.state.players.map((player) =>
                <Player key={player.name} player={player}/>
        )
        if(this.state.items !== 0){
            queryAmountMsg = <h3 className="descriptive">{this.state.items} Players found</h3>
        }
        else{
            queryAmountMsg = <h3 className="descriptive">No Player was found</h3>
        }
        return (
            <>
                {queryAmountMsg}
                <Container fluid>
                    <Row>
                        {players}
                    </Row>
                </Container>
            </>
        )
    }
    renderPagination(){
        
        if(this.state.items === null)
            return ""
        return (
            <div>
                <Pagination >
                    <Pagination.First onClick = {() => this.changePage(1)}/>
                    <Pagination.Prev  onClick = {() => this.changePage(this.state.page-1)}/>
                    {this.renderPages()}
                    <Pagination.Next  onClick = {() => this.changePage(this.state.page+1)}/>
                    <Pagination.Last  onClick = {() => this.changePage(this.state.totalPages)}/>
                </Pagination>
                
            </div>
        )
    }
    render() {
        
        return (
                <div>
                    {this.renderPagination()}
                    {this.renderPlayers()}
                </div>
            );
    }
}
export default PlayersPaginator;