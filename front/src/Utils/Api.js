import axios from 'axios';
export class Api {
    api_base_url = "http://localhost:8000/api/v1"
    /*constructor() {
    }*/
    async setKey(key){
        sessionStorage.setItem("ApiKey", key);
        return new Promise((resolve,reject) => {
            this.searchPlayers("e")
            .then(
                (res)=>{
                    resolve(true)
                }
            )
            .catch(
                (err) =>{
                    reject(false)
                }
            )
           
        })
        
        
    }
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
                'x-api-key': sessionStorage.getItem("ApiKey"),
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
