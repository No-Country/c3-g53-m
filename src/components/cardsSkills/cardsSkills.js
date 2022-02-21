import "./cardsskills.css"

import Ginobili from "./images/ginobilicara.jpg"
import Bryant from "./images/bryant.jpg"
import Jordan from "./images/jordancolor.jpeg"
import Magic from "./images/magic.jpg"

export function Cardsplayer() {
  return (
   
     <>
  <div class="container-cards-skills">
  <div class="container-card">
    <div class="card-title">
      <div class="number">
          <p class="title-number">11</p>
        <div class="line-number"></div>
      </div>
      <div class="card-title-text">
        <p class="color-orange">Manu</p>
        <p>Ginobili</p>
      </div>
    </div>
    <div class="card-image">
      <img src={Ginobili} alt="nofoto" />
    </div>
    <div class="skills">
      <div class="skills-flex">
        <p class="color-grey">Altura</p>
        <p class="color-white">1,98cm</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Posición</p>
        <p class="color-white">Guard</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Peso</p>
        <p class="color-white">93kg</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Last Team</p>
        <p class="color-white">San Antonio</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Nacionalidad</p>
        <p class="color-white">Argentina</p>
      </div>
    </div>
   </div>

   <div class="container-card">
    <div class="card-title">
      <div class="number">
        <p class="title-number">45</p>
        <div class="line-number"></div>
      </div>
      <div class="card-title-text">
        <p class="color-orange">Michael</p>
        <p>Jordan</p>
      </div>
    </div>
    <div class="card-image">
      <img src={Jordan} alt="nofoto" />
    </div>
    <div class="skills">
      <div class="skills-flex">
        <p class="color-grey">Altura</p>
        <p class="color-white">1,98cm</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Posición</p>
        <p class="color-white">Guard</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Peso</p>
        <p class="color-white">93kg</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Last Team</p>
        <p class="color-white">Chicago Bulls</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Nacionalidad</p>
        <p class="color-white">USA</p>
      </div>
    </div>
   </div>

   <div class="container-card">
    <div class="card-title">
      <div class="number">
        <p class="title-number">11</p>
        <div class="line-number"></div>
      </div>
      <div class="card-title-text">
        <p class="color-orange">Kobe</p>
        <p>Bryant</p>
      </div>
    </div>
    <div class="card-image">
      <img src={Bryant} alt="nofoto" />
    </div>
    <div class="skills">
      <div class="skills-flex">
        <p class="color-grey">Altura</p>
        <p class="color-white">1,98cm</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Posición</p>
        <p class="color-white">Guard</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Peso</p>
        <p class="color-white">96kg</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Last Team</p>
        <p class="color-white">Lakers</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Nacionalidad</p>
        <p class="color-white">USA</p>
      </div>
    </div>
   </div>

   <div class="container-card">
    <div class="card-title">
      <div class="number">
        <p class="title-number">32</p>
        <div class="line-number"></div>
      </div>
      <div class="card-title-text">
        <p class="color-orange">Magic</p>
        <p>Johnson</p>
      </div>
     
    </div>
    <div class="card-image">
      <img src={Magic} alt="nofoto" />
    </div>
    <div class="skills">
      <div class="skills-flex">
        <p class="color-grey">Altura</p>
        <p class="color-white">2,06cm</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Posición</p>
        <p class="color-white">Guard</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Peso</p>
        <p class="color-white">116kg</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Last Team</p>
        <p class="color-white">Lakers</p>
      </div>
      <div class="skills-flex">
        <p class="color-grey">Nacionalidad</p>
        <p class="color-white">USA</p>
      </div>
    </div>
   </div>


</div>
</>
   
    
  );
};

