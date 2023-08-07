import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cover from "../../images/Hasibul.png";

function About() {
  return (
    <div id="about" className="height2">
      <div class=" pt-4 pb-4 title text-white d-flex justify-content-center align-items-center">
        <h2>About me</h2>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center container container-fluid">
        <div className="mb-3">
          <img className="cover img-fluid" src={cover} alt="#" />
        </div>

        <div class="social">
          <a
            href="https://www.facebook.com/hasibulcse"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="fb about-img" icon={faFacebook} />
          </a>

          <a
            href="https://www.linkedin.com/in/hasibul-islam-6060541b3"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="about-img linkedin"
              icon={faLinkedinIn}
            />
          </a>
          <a
            href="https://github.com/hasibul1670"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="about-img git" icon={faGithub} />{" "}
          </a>

          <a
            href="https://hasibulislam1670.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="about-img medium " icon={faMediumM} />
          </a>
        </div>

        <div className=" d-flex flex-column align-items-center justify-content-center">
          <div className="col-md-10 col-sm-10 col-12 col-lg-12 col-xl-12">
            <h6 className="mt-2 cover2 text-center container-fluid text-white">
              I am MERN Stack Developer from Dhaka,Bangladesh. I count myself as
              a hardworking person.
              <br />
              For fetching a challenging career in competitive world ,<br /> I
              have enthusiasm, honesty, hard work and passion which will help me
              to reach my goal.And I will be more effective day by day in this
              sector. Let's to Go
            </h6>
            <p></p>

            <div className="text-center">
              <a
                href="https://drive.google.com/file/d/1qHyPgF0G_dWSvyjJVa7L-6xvO1plnLm4/view?usp=sharing"
                class="btn1 btn effect"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
            <p></p>
            <div className="margin text-center text-white">
              <small>
                Hasibul Islam Initiative. © 2023 All Rights Reserved
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
