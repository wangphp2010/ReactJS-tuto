
import React from 'react';
import { Link } from 'react-router-dom'  ; 

function HeaderComponent() {
 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="#">ReactJS App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link" to="/product">Product <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></Link>
            </li>

          </ul>



        </div>
      </div>
    </nav>

  );



}


export default HeaderComponent;
