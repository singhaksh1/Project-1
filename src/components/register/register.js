import React, { useState} from "react"
import "./register.css"
import axios from "axios"
import {Link} from "react-router-dom"

const Register =()=> {

    const [user, setUser ] =useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
     
    })
        const handlechange = e => {
           
            const {name,value} = e.target
           
            setUser({
                ...user,
                [name]: value
            })
        }
        const register= ()=>{
          
            const {name, email , password , reEnterPassword}=user
            if(name && email && password && (password===reEnterPassword)){

                axios.post("http://localhost:9002/register", user)
                .then( res => console.log(res))
            } else{
                alert("Invalid input")
            }
           
        }
    
    return(
        <div className="register">
         
        <h1>Register</h1> 
        <input type="text" name="name" value={user.name.value} placeholder="Enter your name" onChange={handlechange}></input>
        <input type="text"name="email" value={user.email.value} placeholder="Enter your email" onChange={handlechange}></input>
        <input type="password"name="password" value={user.password.value}  placeholder=" Enter your password" onChange={handlechange}></input>  
        <input type="password"name="reEnterPassword" value={user.reEnterPassword.value} placeholder=" Re-enter your password" onChange={handlechange}></input>  
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <Link className="button" to="/login" >Login</Link>

        <Link className="button" to="/">Home</Link>
       </div>
    )
}
export default Register