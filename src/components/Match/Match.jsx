import React, {useEffect, useState} from "react";
import "./match.css"
import Wallpaper from "./images/basketball-wallpaper-preview.jpg"


export function Match() {

  const url = "https://www.balldontlie.io/api/v1/games"

  const [equipo, setEquipo] = useState(null)

  useEffect(() => {
    Data()
  }, [])

  const Data = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const responseJSON = data.json()
      setEquipo(responseJSON)
    })
  }
  

  /*const obtenerDatos = async () => {
    const data = await fetch("")
    const users = await data.json()
    setEquipo(users)
  }*/

/*
  return (
    

    <div className="container-match">
       <img src={Wallpaper} alt="no-foto" />

      <div className="container-text">
      

        <p className="match-text">Stadium</p>
        <p className="coca">Coca - Cola</p> 
        <p className="sprite">Sprite</p> 
      </div>
    
  </div>
     
          
        
          
        
  )*/

  return(
    <ul>
      { !equipo ? "Cargando..." : 
      equipo.map ((equipo, index) =>{
        return <li>{equipo.home_team_score}</li>
      })}
    </ul>
  )
}