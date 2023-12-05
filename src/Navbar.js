import React from 'react';

function Navbar({ filterItem, stateList }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {stateList.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className="nav-link text-dark"
                  href="#"
                  onClick={() => filterItem(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
