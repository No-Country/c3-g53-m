import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./components/home.jsx";

import { Userprofile } from "./components/userprofile"
import { Cardnews } from "./components/Cardnews/Cardnews.jsx"

import { LoginAdmin } from "./components/Back/Login/Login.jsx"
import { SignUp } from "./components/Back/SignUp/SignUp.jsx"
import { HomeAdmin } from "./components/Back/HomeAdmin/HomeAdmin.jsx"
import { DataVisual } from "./components/Back/DataVisual/dataVisual.jsx"
import { AdminNews } from "./components/Back/AdminNews/adminNews.jsx"
import { AdminAds } from "./components/Back/AdminAds/AdminAds.jsx"
import { Admin } from "./components/Back/Admin/Admin.jsx"
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <Routes>         
          <Route path="/" element= {<Home />} />
       
          <Route path="/user-profile" element= {<Userprofile />} />
          <Route path="/noticias" element= {<Cardnews />} />

          <Route path="/homeadmin" element= {<HomeAdmin />} />
          <Route path="/loginadmin" element= {<LoginAdmin />} />
          <Route path="/signup" element= {<SignUp />} />
          <Route path="/datavisual" element= {<DataVisual />} />
          <Route path="/adminnews" element= {<AdminNews />} />
          <Route path="/adminads" element= {<AdminAds />} />
          <Route path="/admin" element= {<Admin />} />
        </Routes>   
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
