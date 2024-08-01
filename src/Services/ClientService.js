import axios from "axios";
import { jwtDecode } from "jwt-decode";

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
    
    static getRoles() {
        const token = window.localStorage.getItem("authToken");
        if (token) {
          const { roles } = jwtDecode(token);
          return roles;
        } else {
          return "ROLE_ANONYMOUS";
        }
      }

    static logout() {
        window.localStorage.removeItem("authToken");
        delete axios.defaults.headers["Authorization"];
      }
    
      static setAxiosToken(token) {
        axios.defaults.headers["Authorization"] = "Bearer " + token;
      }
    
      static setup() {
        const token = window.localStorage.getItem("authToken");
        if (token) {
          const { exp: expiration } = jwtDecode(token);
          if (expiration * 1000 > new Date().getTime()) {
            this.setAxiosToken(token);
          } else {
            this.logout();
          }
        } else {
          this.logout();
        }
      }

      static isAuthenticated() {
        const token = window.localStorage.getItem("authToken");
        if (token) {
          const { exp: expiration } = jwtDecode(token);
          if (expiration * 1000 > new Date().getTime()) {
            return true;
          }
          return false;
        } else {
          return false;
        }
      }
}

export default ClientService;