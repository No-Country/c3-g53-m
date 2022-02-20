import "./cards-skills.css"

import Ginobili from "./images/ginobilicara.jpg"
import Bryant from "./images/bryant.jpg"
import Jordan from "./images/jordancolor.jpeg"
import Magic from "./images/magic.jpg"

const cardsSkills = () => {
  return (
    
    
  <div className="container-cards-skills">
    <div className="container-card">
      <div className="card-title">
        <div className="number">
            <p className="title-number">11</p>
          <div className="line-number"></div>
        </div>
        <div className="card-title-text">
          <p className="color-orange">Manu</p>
          <p>Ginobili</p>
        </div>
      </div>
      <div className="card-image">
        <img src={Ginobili} alt="nofoto" />
      </div>
      <div className="skills">
        <div className="skills-flex">
          <p className="color-grey">Altura</p>
          <p className="color-white">1,98cm</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Posición</p>
          <p className="color-white">Guard</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Peso</p>
          <p className="color-white">93kg</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Last Team</p>
          <p className="color-white">San Antonio</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Nacionalidad</p>
          <p className="color-white">Argentina</p>
        </div>
      </div>
     </div>

     <div className="container-card">
      <div className="card-title">
        <div className="number">
          <p className="title-number">45</p>
          <div className="line-number"></div>
        </div>
        <div className="card-title-text">
          <p className="color-orange">Michael</p>
          <p>Jordan</p>
        </div>
      </div>
      <div className="card-image">
        <img src={Jordan} alt="nofoto" />
      </div>
      <div className="skills">
        <div className="skills-flex">
          <p className="color-grey">Altura</p>
          <p className="color-white">1,98cm</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Posición</p>
          <p className="color-white">Guard</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Peso</p>
          <p className="color-white">93kg</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Last Team</p>
          <p className="color-white">Chicago Bulls</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Nacionalidad</p>
          <p className="color-white">USA</p>
        </div>
      </div>
     </div>

     <div className="container-card">
      <div className="card-title">
        <div className="number">
          <p className="title-number">24</p>
          <div className="line-number"></div>
        </div>
        <div className="card-title-text">
          <p className="color-orange">Kobe</p>
          <p>Bryant</p>
        </div>
      </div>
      <div className="card-image">
        <img src={Bryant} alt="nofoto" />
      </div>
      <div className="skills">
        <div className="skills-flex">
          <p className="color-grey">Altura</p>
          <p className="color-white">1,98cm</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Posición</p>
          <p className="color-white">Guard</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Peso</p>
          <p className="color-white">96kg</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Last Team</p>
          <p className="color-white">Lakers</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Nacionalidad</p>
          <p className="color-white">USA</p>
        </div>
      </div>
     </div>

     <div className="container-card">
      <div className="card-title">
        <div className="number">
          <p className="title-number">32</p>
          <div className="line-number"></div>
        </div>
        <div className="card-title-text">
          <p className="color-orange">Magic</p>
          <p>Johnson</p>
        </div>
       
      </div>
      <div className="card-image">
        <img src={Magic} alt="nofoto" />
      </div>
      <div className="skills">
        <div className="skills-flex">
          <p className="color-grey">Altura</p>
          <p className="color-white">2,06cm</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Posición</p>
          <p className="color-white">Guard</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Peso</p>
          <p className="color-white">116kg</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Last Team</p>
          <p className="color-white">Lakers</p>
        </div>
        <div className="skills-flex">
          <p className="color-grey">Nacionalidad</p>
          <p className="color-white">USA</p>
        </div>
      </div>
     </div>


  </div>

    
  );
};

export default cardsSkills