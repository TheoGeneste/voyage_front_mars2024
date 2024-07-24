import axios from "axios";

class ReservationService{

    static fetchReservations(){
        return axios.get("http://127.0.0.1:3001/reservations");
    }

    static fetchReservationByID(id){
        return axios.get("http://127.0.0.1:3001/reservations/"+id);
    }
}

export default ReservationService;