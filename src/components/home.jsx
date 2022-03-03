import React from "react";
import { Board } from "./Board/Board";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/Nav.jsx"
import {Cardsplayer} from "./cardsSkills/cardsSkills"
import {NewsFeaturesAdvertising} from "./newsFeaturesAdvertising/newsFeaturesAdvertising.jsx"
import "./home.css"



export function Home() {
    return(

        <div className="caja">
            <Nav />
            <NewsFeaturesAdvertising />
            <Board />
            <Cardnews />
            <Cardsplayer />      
        </div>
    )
}
