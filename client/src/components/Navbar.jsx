import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white px-4"
      style={{
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-3"
          style={{ color: "#111" }}
        >
          Apna Dairy
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-3">

            <li className="nav-item">
              <Link
                to="/"
                className="nav-link fw-semibold"
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/customers"
                className="nav-link fw-semibold"
              >
                Customers
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/add-customer"
                className="nav-link fw-semibold"
              >
                Add Customer
              </Link>
            </li>

            <li className="nav-item">
              <button className="btn btn-primary px-4">
                Login
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;