import axios from 'axios';
export class Api {
    api_base_url = "http://localhost:8000/api/v1"
    /*constructor() {
    }*/
    searchPlayers(search,order='asc',page=1) {
        /*let params = {
            search,
            order,
            page
        }*/
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 1423,
            },
        }
        return axios.get(this.api_base_url + `/players?search=${search}&order=${order}&page=${page}`, config)
    }
    searchTeam(name, page) {
        let data = {
            Name: name,
            Page: page,
        }
        let config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 1423,
            },
        }
        return axios.post(this.api_base_url + `/team`, data, config)
    }
}
export default Api;
