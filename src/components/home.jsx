import React from "react";
import { Board } from "./Board/Board";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/Nav"
import {Cardsplayer} from "./cardsSkills/cardsSkills"
import "./home.css"



export function Home() {
    return(

        <div className="caja">
            <Nav />
            
            <Board />
            <Cardnews />
            <Cardsplayer />      
        </div>
    )
}
