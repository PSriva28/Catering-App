import { useState } from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Auth = () => {
  return (
    <div className='auth'>
        <Register/>
        <Login/>
    </div>
  )
}

const Register = () =>{
    const [username,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setpw] = useState('');
    const onRegister = async (e) =>{
        e.preventDefault();
        try{
           await axios.post("http://localhost:5000/api/auth/register", {username, email, password});
            alert("Registration Successful!")
        }
        catch(err){
            console.log(err);
            alert("Registeration Failed!! Try Again.")
        }
        setName("");
        setEmail("");
        setpw("");
    }

    return(
    <div className='auth-container'>
    <h1>Register</h1>
    <form onSubmit={onRegister}>
        <div className='form-group'>
            <label>Username :</label>
            <input type="text" placeholder='Enter your name.' id="text" value = {username} onChange = {(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-group'>
            <label>Email :</label>
            <input type="email" placeholder='Enter your email.' id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Password :</label>
            <input type="password" placeholder='Enter your password.' id="password" value= {password} onChange={(e)=>setpw(e.target.value)}/>
        </div>
        <button type='submit'>Submit</button>
    </form>

    </div>
)};

const Login = () =>{
    const [_, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setpw] = useState('');

    const onLogin = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", {email,password});
            console.log(response)
            alert("Login Successful!");
            setCookie("token", response.data.access_token);
            window.localStorage.setItem("userDetails", JSON.stringify(response.data.user));
            navigate("/");
        }
        catch(err){
            console.log(err);
            alert("Login Failed!")
        }
        setEmail("");
        setpw("");
    }
    return(
        <div className = "auth-container">
        <h1>Login</h1>
        <form onSubmit={onLogin}>
            <div className='form-group'>
                <label>Email :</label>
                <input type = "email" placeholder='Enter your email.' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Password :</label>
                <input type = "password" placeholder='Enter your password.' id='password' value={password} onChange={(e) =>setpw(e.target.value)}/>
            </div>
            <button type ='submit'>Login</button>
        </form>
        </div>
    )
}

export default Auth;