import React from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <header className="p-3 mb-3 border-bottom fixed-top bg-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><HashLink smooth to="#clothes" className="nav-link px-2 link-body-emphasis">Clothes</HashLink></li>
            <li><HashLink smooth to="#furniture" className="nav-link px-2 link-body-emphasis">Health</HashLink></li>
            <li><HashLink smooth to="#furniture" className="nav-link px-2 link-body-emphasis">Furniture</HashLink></li>
            <li><HashLink smooth to="#electronics" className="nav-link px-2 link-body-emphasis">Electronics</HashLink></li>
            <li><HashLink smooth to="#beautypicks" className="nav-link px-2 link-body-emphasis">Beauty Picks</HashLink></li>
            <li><HashLink smooth to="#petcare" className="nav-link px-2 link-body-emphasis">PetCare</HashLink></li>
            <li><HashLink smooth to="#toys" className="nav-link px-2 link-body-emphasis">Toys</HashLink></li>
            <li><HashLink smooth to="#fashion" className="nav-link px-2 link-body-emphasis">Fashion</HashLink></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
