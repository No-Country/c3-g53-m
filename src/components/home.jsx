import React from "react";
import { Board } from "./Board/Board";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/Nav"



export function Home() {
    return(

        <>
        <Nav />
        <h1>Aca va a estar el Home</h1>
       
        <Board />
        <Cardnews />
        
      
        </>
    )
}
