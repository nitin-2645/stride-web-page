import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar-expand-lg navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-4 mb-lg-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <li className="nav-item">
                <a
                  className="navbar-brand   mt-4"
                  style={{ color: "blue" }}
                  href="/"
                >
                  {" "}
                  <i className="fa-solid fa-bars p-4"></i>Stride Tutoring
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">

                <i class="fa-solid fa-table-columns mx-2"></i>Dash board
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">  
                  {" "}
                  <i className="fa-solid fa-envelope p-2"></i>Messages
                </a>
              </li>
               
              <li className="nav-item">
                <a className="nav-link " href="/">
                <i class=" fa fa-light fa-video mx-2"></i>Upcoming Session
                </a>
              </li>
  
              <li className="nav-item">
                <a className="nav-link " href="/">
                  <i class="fa-solid fa-shop p-2"></i>order History
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/">
                  <i className="fa-solid fa-user p-2"></i>My Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/">
                  <i class="fa-solid fa-headphones mx-2"></i>Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " style={{ color: "blue" }} href="/">
                  <i className=" fa fa-light fa-clock p-2"></i>Session History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
