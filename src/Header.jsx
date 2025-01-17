import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container-fluid">
            <Link to="/">
              <span className="navbar-brand">PenCraft</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="ms-5 collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/">
                    <span className="nav-link active" aria-current="page">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard">
                    <span className="nav-link">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Login">
                    <span className="nav-link">Login</span>
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
