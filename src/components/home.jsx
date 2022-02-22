import React from "react";
import { Board } from "./Board/Board";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/nav"
import {Cardsplayer} from "./cardsSkills/cardsSkills"
import "./home.css"



export function Home() {
    return(

        <div className="caja">
            <Nav />
            <h1 className="prueba">Aca va a estar el Home</h1>
            <Board />
            <Cardnews />
            <Cardsplayer />      
        </div>
    )
}
