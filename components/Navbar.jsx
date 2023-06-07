const React = require("react");

module.exports = function Navigation({user}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Main
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link">
                Мир чая
              </div>
            </li>
            {user ? (
              <>
              <h3>Hello, {user.name}</h3>
            <li className="nav-item">
              <a className="nav-link" href="/api/auth/logout">
                Logout
              </a>
            </li></>
            ) : (
              <>
                <li className="nav-item">
              <a className="nav-link" href="/auth/log">
                Log
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/reg">
                Reg
              </a>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};