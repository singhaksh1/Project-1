import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())




mongoose.connect("mongodb+srv://akash1:akash1@cluster0.2ujsgko.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
})


const userSchema= new mongoose.Schema({
    name: String,
    email:String,
    password:String
}) 
const User= new mongoose.model("User", userSchema)

//Routes
app.post("/login",Login)

app.post("/register",Register )

app.post("/logout",Logout)


app.listen(9002,()=>{
    console.log("Be started at port 9002")
})

async function Register(req,res)
{
   const {name,email,password}= req.body
   var data = await User.find({email: email})
   if(data.length)
   {
    res.send("user already exists");
   }
   else
   {
     const user = {
        name:name,
        email:email,
        password:password
     }
     User.create(user);
     res.send("data saved successfully");
   }
   
}


async function Login(req,res)
{
   const {email,password} = req.body;
   var data = await User.find({email: email ,password:password})
   if(data.length)
   {
    res.send({message:"login successful",user:data[0]});
   }
   else
   {
    res.send({message:"Invalid email or password"});
   }

}

async function Logout(req,res)
{
   
}
