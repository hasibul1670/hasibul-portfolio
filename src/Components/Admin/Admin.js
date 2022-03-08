import React from 'react';
import Login from '../Login/Login';
import ReactDOM from 'react-dom';
import Countdown1 from 'react-countdown';
import CountDown from '../../CountDown/CountDown';

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
            <img src="" alt="" srcset="" />

           <h2 className="text-danger text-center font-weight-bold ">
<CountDown></CountDown>

           
            </h2>
<Countdown1
    date={Date.now() + 5000}
    renderer={renderer}
  />


      
        </div>
    );
};

export default Admin;