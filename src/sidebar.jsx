import React from "react";

export const Sidebar = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "280px", height: "calc(100vh - 130px)" }}
      >
        <ul className="nav nav-pills flex-column mb-auto pt-5">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
              Books
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Profile
            </a>
          </li>

          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
