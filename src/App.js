import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { Login } from "./components/login"
import { Userprofile } from "./components/userprofile"



function App() {
  return (
    
    <BrowserRouter>
     
    
    
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
