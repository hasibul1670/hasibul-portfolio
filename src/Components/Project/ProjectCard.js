/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function ProjectCard({
  title,
  description,
  website,
  frontEndRepo,
  image,
}) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex align-items-center">
      <div className="card w-80 h-80">
        <img className="p-2 img-fluid card-img-top h-25  custom-image" src={image} alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center  text-white">{title}</h5>
          <p className="text-center text-info text-sm ">{description}</p>

          <div className=" d-flex ml-3 justify-content-between">

            <a target="_blank" href={website} className="btn1 btn btn-sm ">
              Website
            </a>

            <a target="_blank" href={frontEndRepo} className="btn1 btn btn-sm ">
              GitHub
            </a>
         
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
