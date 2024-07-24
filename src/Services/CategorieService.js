import axios from "axios";

class CategorieService {

    static fetchCategories(){
        return axios.get("http://127.0.0.1:3001/categories");
    }

    static fetchCategorieByID(id){
        return axios.get("http://127.0.0.1:3001/categories/"+id);
    }

}

export default CategorieService;