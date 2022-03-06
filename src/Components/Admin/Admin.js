import React from 'react';
import Login from '../Login/Login';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Admin = () => {

    const Completionist = () => <span><Login></Login></span>;
   

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{hours}:{minutes}:{seconds}</span>;
        }
      };
    return (
        <div>
           <h2 className="text-danger text-center font-weight-bold ">
           
            </h2>
<Countdown
    date={Date.now() + 5000}
    renderer={renderer}
  />


      
        </div>
    );
};

export default Admin;