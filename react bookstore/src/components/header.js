import React from 'react';

const Header = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">Book Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Books</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Contact</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
