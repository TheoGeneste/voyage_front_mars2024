import React, { useContext, useState } from 'react'
import ClientService from '../Services/ClientService';
import axios from 'axios';
import { toast } from 'react-toastify';
import AuthContext from '../Context/AuthContext';

const LoginPage = () => {
    const [user, setUser] = useState({});
    const {setIsAuthenticated, setToken} = useContext(AuthContext);

    const handleChange = (event) => {
        const {name, value} = event.currentTarget;
        setUser({...user,[name] : value })
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            const token = await ClientService.login(user)
            if (token.data.token) {
                axios.defaults.headers.common['Authorization'] = "Bearer "+token.data.token;
                setIsAuthenticated(true);
                setToken(token.data.token);
                toast.success('Vous êtes bien connectée')
            }else{
                toast.error("Identifiant incorrect")
            }
            
        } catch (error) {
            toast.error("Identifiant incorrect")
            console.log(error);
        }
    }


  return <>
  <div className='d-flex justify-content-center'>
    <form onSubmit={login}>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={handleChange} value={user.email} />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={handleChange} value={user.password}/>
    </div> 
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  
  </>
}

export default LoginPage