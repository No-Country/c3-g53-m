import React, {useEffect, useLayoutEffect} from "react";
import "./Board.css"

export function Board() {
  return (
    <div className="wrapper">
    <h3>Temporada 2022-2023</h3>
    <h3>Posiciones</h3>
     <div className="row title">
        <ul>
        <p>Nº</p>
          <p>Equipo</p>
          <p>Jugados</p>
          <p>Ganados</p>
          <p>Perdidos</p>
          <p>+/-</p>
        </ul>
      </div>

      <section className="row-wrapper">
        <div className="row nfl">
          <ul>
            <li>1</li>
            <li>LNB</li>
            <li>53</li>
            <li>45</li>
            <li>100</li>
          </ul>
        </div>
      </section>

      <section className="row-wrapper">
        <div className="row nfl">
          <ul>
            <li>1</li>
            <li>LNB</li>
            <li>53</li>
            <li>45</li>
            <li>100</li>
          </ul>
        </div>
      </section>

      <section className="row-wrapper">
        <div className="row nfl">
          <ul>
            <li>1</li>
            <li>LNB</li>
            <li>53</li>
            <li>45</li>
            <li>100</li>
          </ul>
        </div>
      </section>

      <section className="row-wrapper">
        <div className="row nfl">
          <ul>
            <li>1</li>
            <li>LNB</li>
            <li>53</li>
            <li>45</li>
            <li>100</li>
          </ul>
        </div>
      </section>

      <section className="row-wrapper">
        <div className="row nfl">
          <ul>
            <li>1</li>
            <li>LNB</li>
            <li>53</li>
            <li>45</li>
            <li>100</li>
          </ul>
        </div>
      </section>
   </div>
  )
}