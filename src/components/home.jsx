import React from "react";
import { Cardnews } from "./Cardnews/Cardnews";
import {Nav} from "./Nav/nav.jsx"
import Board from "./Board/Board";
import {Match} from "./Match/Match.jsx"
import {Cardsplayer} from "./cardsSkills/cardsSkills"
import {NewsFeaturesAdvertising} from "./newsFeaturesAdvertising/newsFeaturesAdvertising.jsx"
import "./home.css"
import Footer from "./Footer/Footer";

export function Home() {
    return(
        <div className="caja">
            <Nav />
            <NewsFeaturesAdvertising />
            <Cardnews />
            <Board />
            <Match />
            <Cardsplayer />
            <Footer />
        </div>
    )
}
