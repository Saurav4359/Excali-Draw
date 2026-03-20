import express from "express";
import { Signin, Signup } from "./types/types";
import { AuthMiddleware } from "./middlewares/Authmiddleware";
const app= express();


app.post("/signup",(req,res)=> {
    const {success, data} = Signup.safeParse(req.body);
    if(!success){ 
        return res.status(400).json({
            message : "Invalid input"
        })
    }

})
app.post("/signin", (req, res)=> {
    const {success, data } =Signin.safeParse(req.body);
    if(!success) {
        return res.status(400).json({
            message : "Invalid Input"
        })
    }
})

app.post("/ room",AuthMiddleware, (req,res)=> {
//db call

res.json({
    roomId : "1sdfcv"
})
})
app.listen(3000);