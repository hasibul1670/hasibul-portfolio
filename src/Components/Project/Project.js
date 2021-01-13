import React from 'react'
import creative from '../../images/projectImg/cre.png';
import traval from '../../images/projectImg/travle.png';
import vol from '../../images/projectImg/vol.png';
import app from '../../images/projectImg/app.png';



function Project() {
    return (
        <div id="project" className='container'>
            
            <div class=" pt-4 pb-4 title d-flex justify-content-center align-items-center">
                    <h2>My Projects</h2>
                </div>
                
          <div class="card-deck">
              <div className="col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4">

           
  <div class="card">
    <img className="      img-fluid card-img-top" src={creative} alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center text text-white">Creative Agency Website</h5>
      <p class="card-text text-center text-white ">A fullstack Agency website using React,Firebase Authentication,Bootstrap,MongoDB and NodeJs</p>

      <div className="text-center">
      <a href='https://creative-agency365.netlify.app/' class="btn1 btn  ">Website</a> 
      <a href="https://github.com/hasibul1670/creative-agency-client" class="btn2 btn  ">Github</a>
      </div>

    </div>
  </div>
  
  </div>
  

  <div className='col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4'>
  <div class="card">
    <img  className="      img-fluid card-img-top" src={app}   alt="..."/>
    <div class="card-body">
    <h5 class="card-title text-center text text-white">Apartment Hunt Website</h5>
  
      <p class="card-text text-center text-white ">A fullstack Apartment agency website using React,Redux,Firebase Authentication,Bootstrap,MongoDB and NodeJs</p>

      <div className="text-center">
      <a href="https://team1-apartment-hunt.netlify.app/" class="btn1 btn  ">Website</a> 
      <a href="https://github.com/hasibul1670/Apartment-Hunt" class="btn2 btn  ">Github</a>
      </div>

    </div>
  </div>
</div>



  <div className='col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4'>
  <div class="card">
    <img className="      img-fluid card-img-top" src={vol}  alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center text text-white">Volunteer Network Website </h5>
      <p class="card-text text-center text-white ">A Volunteer Website using React,Firebase Authentication,Bootstrap,HTML5, Netlify,CSS3</p>

      <div className="text-center">
      <a href="https://volunteer-network365.netlify.app/" class="btn1 btn  ">Website</a> 
      <a href="https://github.com/hasibul1670/volunteer-network" class="btn2 btn  ">Github</a>
      </div>

    </div>
  </div>
</div>


<div className='col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4'>
  <div class="card">
    <img className="      img-fluid card-img-top" src={traval}   alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center text text-white">Travel Agency Website</h5>
      <p class="card-text text-center text-white ">A Travel Agency Website using React,Firebase Authentication,Bootstrap,HTML5,CSS3,Netlify</p>

      <div className="text-center">
      <a href="https://travel-guru-365.netlify.app/" class="btn1 btn  ">Website</a> 
      <a href="https://github.com/hasibul1670/travel-guru" class="btn2 btn  ">Github</a>
      </div>

    </div>
  </div>
  </div>



 
</div>
        </div>
    )
}

export default Project
