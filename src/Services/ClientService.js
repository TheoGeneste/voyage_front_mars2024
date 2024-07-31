import axios from "axios";

class ClientService{
    static fetchClients(){
        return axios.get("http://127.0.0.1:3001/clients")
    }
    
    static fetchClientByID(id){
        return axios.get("http://127.0.0.1:3001/clients/"+id)
    }

    static login (user){
        return axios.post("http://127.0.0.1:3001/clients/login", user)
    }
}

export default ClientService;