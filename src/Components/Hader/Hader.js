import React from "react";
import cover from "../../images/Hasibul.png";
import Typing from "../Typing/Typing";

function Hader() {
  return (
    <div className="navbar-style height">
      <section className="d-flex flex-column align-items-center justify-content-center container container-fluid">
        <div className="mb-3">
          <img className="cover img-fluid" src={cover} alt="#" />
        </div>

        <div className=" d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-white font-weight-bold">Hasibul Islam</h2>

          <h3 className="text-white">
            <Typing></Typing>
          </h3>

          <div className="col-md-10 col-sm-10 col-12 col-lg-12 col-xl-12">
            <h6 className="mt-2 cover2 text-center container-fluid text-white">
              I am Full Stack Developer from Dhaka,Bangladesh. I count myself as
              a hardworking person.
              <br />
              For fetching a challenging career in competitive world ,<br /> I
              have enthusiasm, honesty, hard work and passion which help me to
              reach my goal.
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hader;
