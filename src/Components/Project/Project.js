/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ejournal from "../../images/projectImg/ejournal.png";
import noteApp from "../../images/projectImg/noteapp.png";
import pcbuild from '../../images/projectImg/pcbuild.png';
import sunlight from '../../images/projectImg/sunlight.png';

function Project() {
  return (
    <div id="project" className="container">
      <div class=" pt-4 pb-4 title d-flex justify-content-center align-items-center">
        <h2>My Projects</h2>
      </div>

      <div class="card-deck">
        <div className="col-9 col-sm-9 col-md-6 col-lg-5 col-xl-4">
          <div class="card ">
            <img
              className=" p-2 img-fluid card-img-top"
              src={noteApp}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center text text-white">Notes</h5>
              <p class="card-text text-center text-white ">
                A note organizer application to help you to manage your notes.
              </p>

              <div className="text-center">
                <a
                  target="blank"
                  href="https://clientnotes.vercel.app/"
                  className="btn1 btn btn-sm mb-2"
                >
                  Website
                </a>

                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/note-organizer-application"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Front-End
                </a>
                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/note-organizer-application"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Back-End
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 col-sm-9 col-md-6 col-lg-5 col-xl-4">
          <div class="card ">
            <img
              className=" p-2 img-fluid card-img-top"
              src={ejournal}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center text text-white">
                Electronic Journal
              </h5>
              <p class="card-text text-center text-white ">
                A fullstack E-Journal website using React,BootStarp,JWT
                NodeJs,MongoDB,etc
              </p>

              <div className="text-center">
                <a
                  target="_blank"
                  href="https://electronic-journal-client.vercel.app/"
                  className="btn1 btn btn-sm mb-2"
                >
                  Website
                </a>

                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/Electronic-Journal-client"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Front-End
                </a>
                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/Electronic-Journal-Server"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Back-End
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* //!buiulding */}

        <div className="col-9 col-sm-9 col-md-6 col-lg-5 col-xl-4">
          <div class="card ">
            <img
              className=" p-2 img-fluid card-img-top"
              src={pcbuild}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center text text-white">Techland</h5>
              <p class="card-text text-center text-white ">
                A fullstack E-Journal website using NEXT JS,Tailwind
                NodeJs,MongoDB,etc
              </p>

              <div className="text-center">
                <a
                  target="_blank"
                  href="https://client-azure-alpha.vercel.app"
                  className="btn1 btn btn-sm mb-2"
                >
                  Website
                </a>

                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/techland/tree/main/client"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Front-End
                </a>
                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/techland/tree/main/server"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Book Management */}
        <div className="col-9 col-sm-9 col-md-6 col-lg-5 col-xl-4">
          <div class="card ">
            <img
              className=" p-2 img-fluid card-img-top"
              src={sunlight}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center text text-white">
                SunLight Academy
              </h5>
              <p class="card-text text-center text-white ">
                A fullstack website using React,tailwindCSS,JWT,Redux
                NodeJs,MongoDB,etc
              </p>

              <div className="text-center">
                <a
                  target="_blank"
                  href="https://summer-school-camp.netlify.app/"
                  className="btn1 btn btn-sm mb-2"
                >
                  Website
                </a>

                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/Client-Summer-Camp-School"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Front-End
                </a>
                <a
                  target="_blank"
                  href="https://github.com/hasibul1670/summer-camp-school-server"
                  className="btn1 btn btn-sm mb-2"
                >
                  Github Back-End
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
