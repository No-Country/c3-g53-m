import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import "./Board.css"

const Board = () => {
    const apiKey = 'https://skyflocodes.github.io/NBAAPI/NBATEAMS.json';
    const [teams, setTeams] = useState([]);
    const [table, setTable] = useState([]);
    const [search, setSearch] = useState("");

    const textValue = (obj) => {
      let result = table.filter((team) => {
        if(team.name.toString().toLowerCase().includes(obj.toLowerCase()) 
        || team.location.toString().toLowerCase().includes(obj.toLowerCase()) 
        || team.abbreviation.toString().toLowerCase().includes(obj.toLowerCase()) 
        ){
          return team;
        }
      })
      setTeams(result)
    }
     
    const handleSearch = (e) => {
      setSearch(e.target.value)
      textValue(e.target.value)
    }
    
    useEffect(() => {
      fetch(apiKey)
      .then((res) => 
        res.json())
        .then((data) => {
        setTable(data);
        setTeams(data);
      });
    }, []);
  
    return (
      <div className="wrapper">
      <h2>Franquicias NBA 2021-2022
        <input type="text" 
        value={search} 
        className="form-control" 
        onChange={handleSearch} 
        placeholder="Buscar equipo.." />
      </h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th></th>
            <th>Sigla</th>
            <th>Apodo</th>
            <th>Nombre</th>
            <th>Títulos</th>
          </tr>
        </thead>
        {teams.map((team, id) => (
          <tbody className="text-dark" key={id}>
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