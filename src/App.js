import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element= {<Home />} />
        </Routes>    
      </div>
    </BrowserRouter>
  );
}

export default App;
