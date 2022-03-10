import React from "react";
import {Nav} from "./Nav/nav.jsx"
import Board from "./Board/Board.jsx"

import {Cardsplayer} from "./cardsSkills/cardsSkills"
import {NewsFeaturesAdvertising} from "./newsFeaturesAdvertising/newsFeaturesAdvertising.jsx"
import "./home.css"
import Footer from "./Footer/Footer";

export function Home() {
    return(
        <div className="caja">
            <Nav />
            <NewsFeaturesAdvertising />
            <Board />         
            <Cardsplayer />
            <Footer />
        </div>
    )
}
