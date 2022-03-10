import React from "react";
import {useEffect, useState} from "react"
import {Table} from "react-bootstrap"
import "./Board.css"

const Board = () => {
    const apiKey = 'https://skyflocodes.github.io/NBAAPI/NBATEAMS.json';
    const [teams, setTeams] = useState([]);
   
    useEffect(() => {
      fetch(apiKey)
      .then((res) => 
        res.json())
        .then((data) => {
        setTeams(data);
      });
    }, []);
  
    return (
      <div className="wrapper">
      <h2>Franquicias NBA 2021-2022</h2>
      <Table id="equipos" striped bordered hover variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Sigla</th>
            <th>Apodo</th>
            <th>Nombre</th>
            <th>Títulos</th>
          </tr>
        </thead>
        {teams.map((team, i) => (
              <tbody className="text-dark">
                <td>{team.teamId}</td>
                <td>{team.abbreviation}</td>
                <td>{team.name}</td>
                <td>{team.location}</td>
                <td>{team.chips}</td>
              </tbody>
              ))}
      </Table>
    </div>
    );
  }
  
export default Board;