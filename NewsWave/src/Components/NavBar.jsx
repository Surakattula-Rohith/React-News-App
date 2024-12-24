import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <>
      <header >
        <nav >
          <div >
            <Link to="/" >
              <img 
                src={Logo} 
                alt="Logo" 
                
              />
              <span >NewsWave</span> {/* Added NewsWave text */}
            </Link>
            
            <div >
              <Link to="/publishers" >
                Publishers
              </Link>
              <Link to="/personalinfo" >
                Personal Info
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div ></div>
    </>
  );
};

export default NavBar;
