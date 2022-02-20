import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { Login } from "./components/login"
import { Userprofile } from "./components/userprofile"

 import  Nav  from "./components/Nav/nav.jsx";
 // import CardsSkills from "./components/cardsSkills/cardsSkills.js

function App() {
  return (
    
    <BrowserRouter>
     <Nav />
    
    
      <div className="App">
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element= {<Login />} />
          <Route path="/user-profile" element= {<Userprofile />} />
        </Routes>    
      </div>
    </BrowserRouter>
  );
}

export default App;
