import React from 'react';
import'./CountDown.css';
import backgroundImg from './Ima/bg01.jpg';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + backgroundImg + ")"
  };

const CountDown = () => {
    return (
        <div>
    <section style={ sectionStyle }>

        
    <h2 className="Maintext">We're Getting Ready!! 404</h2>

            
      </section>
    

        </div>
    );
};

export default CountDown;