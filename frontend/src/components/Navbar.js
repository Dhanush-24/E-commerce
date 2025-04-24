import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Navbar({ onSearch, searchTerm }) {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          {/* Brand Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn.pixabay.com/photo/2021/04/09/15/05/cart-6164637_1280.jpg"
              alt="E-commerce Logo"
              width="100"
            />
          </Link>

          {/* Responsive Toggle Button */}
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

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-3"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/KidsPage">Kids</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/living">Living</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/wishListPage">WishList</Link></li>
              <li className="nav-item ms-3"><Link className="nav-link" to="/cartedItems">Cart</Link></li>
            </ul>

            {/* Search Bar */}
            <div className="d-flex ms-auto me-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  autoComplete="off"
                />
                {searchTerm && (
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => onSearch("")}
                    aria-label="Clear search input"
                  >
                    &#x2715;
                  </button>
                )}
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                type="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserCircle size={24} className="me-1" />
                {user ? user.name.split(" ")[0] : 'Profile'}
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                {user ? (
                  <>
                    <li><Link className="dropdown-item" to="/profile">View Profile</Link></li>
                    <li><Link className="dropdown-item" to="/orders">My Orders</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/register">Register</Link></li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
