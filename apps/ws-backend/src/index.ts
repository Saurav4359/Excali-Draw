import {  WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SCERET } from "@repo/backend-common/config";
const wss = new WebSocketServer({port : 8080});

wss.on("connection", (socket,request)=> {
    const url = request.url;
    if(!url) return;
    const queryParam = new URLSearchParams(url.split('?')[1]);
    const token = queryParam.get('token') || ""; 
     const decode = jwt.verify(token!, JWT_SCERET);
     if(!decode || !(decode as JwtPayload ).userId){
       socket.close();
       return;
     }

        

     
     socket.on("message", (data)=> {
              socket.send("pong");
     })
})

 