import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import {Link} from "react-router-dom"

const Login =({setLoginUser})=> {
    const [user, setUser ] =useState({
        
        email:"",
        password:"",
       
    })
    const handlechange = e => {
            const {name,value} =e.target
            setUser({
                ...user,    //spread operator
                [name]: value
            })
    }

    const login = ()=>{
        console.log("login clicked")
        const {email,password}=user
        if(email && password){

            axios.post("http://localhost:9002/login", user)
            .then( res => {console.log(res.data)
                 setLoginUser(res.data.user)
            })
        } else{
            alert("Please enter email and password")
        }
    }
    
    return(
        <div className="login">
         <h1>Login</h1> 
         <input type="text" name="email" value={user.email.value}  placeholder="Enter your Email" onChange={handlechange} ></input>
         <input type="password" name="password" value={user.password.value}  placeholder="Enter your Password" onChange={handlechange}></input>  
         <div className="button" onClick={login}>Login</div>
         <div>or</div>
         <Link className="button" to="/register">Register</Link>
         <Link className="button" to="/">Home</Link>
         
        </div>
    )
}
export default Login