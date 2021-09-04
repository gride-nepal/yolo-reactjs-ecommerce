
import React,{ createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';


const SocketIOContext = createContext();
export const useSocketIO = () => useContext(SocketIOContext);

const SocketIOContextProvider = ({children}) => {
    const [message, setMessage] = useState();
    console.log("====hello========socket.id============");   
   let socket  ;
   useEffect(()=>{
        console.log("USE EFFECT IN SOCKET CONTEXT")
   },[])

   if(!socket){
    
    console.log("====ho========socket.id============");   
    socket = io("http://localhost:9500/",{
            transports:['websocket'],
            jsonp:false,
          //  autoConnect: true
            
    });
   socket.on('connect', () => {
    console.log('Conected to socket server'+socket.id);
    console.log("socket.disconnected "+socket.disconnected); // false
    console.log("socket.connected "+socket.connected); // false
        
        console.log("============socket.id============");        
        console.log(socket);

   

    });

   }
   
//setInterval(function(){ socket.emit('event://send-message',{data:'web message',id:socket.id})});
  
   socket.on('event://get-message',(payload)=> console.log(payload));
   const sendMessageNow = () => {
       console.log("SENDING MESSAGE");
    socket.emit("placeorder",{user:'123',orderno:'546'});
   }

  


    const value = {message,sendMessageNow};

    return(
        <SocketIOContext.Provider value={value}>
            {children}
        </SocketIOContext.Provider>
    )
}

export default SocketIOContextProvider;