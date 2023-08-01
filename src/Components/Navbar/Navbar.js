/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="home" className="  home">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container container-fluid">
          <Link class="navbar-brand font-weight-bold " href="#">
            Hasibul Islam
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
            <span class="sr-only">Toggle navigation</span>
          </button>

          <div
            className=" collapse navbar-collapse text-center"
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-right active mx-2  nav-link nav-link-ltr">
                <a className="nav-link text-white " href="#home">
                  Home
                </a>
              </li>
              <li className="nav-right active mx-2  nav-link nav-link-ltr">
                <a className="nav-link text-white " href="#project">
                  Projects
                </a>
              </li>
              <li className="nav-right active mx-2  nav-link nav-link-ltr">
                <a className="nav-link text-white " href="#blog">
                  Blogs
                </a>
              </li>
              <li className="nav-right active mx-2  nav-link nav-link-ltr">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>

              <a
                className="nav-link text-white btn-sm btn btn-danger text-white"
                target="_blank"
                href="https://drive.google.com/file/d/1qHyPgF0G_dWSvyjJVa7L-6xvO1plnLm4/view?usp=sharing"
              >
                Resume
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
