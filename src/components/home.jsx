import React from "react";
import { Board } from "./Board/Board";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/nav"
import {Cardsplayer} from "./cardsSkills/cardsSkills"
import {NewsFeaturesPublicity} from "./newsFeaturesPublicity/newsFeaturesPublicity.jsx"
import "./home.css"



export function Home() {
    return(

        <div className="caja">
            <Nav />
            <NewsFeaturesPublicity />
            <Board />
            <Cardnews />
            <Cardsplayer />      
        </div>
    )
}
