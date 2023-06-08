const React = require("react");

module.exports = function Navigation({ user }) {
  return (
    <nav className="container" style={{ width: "100vw", marginLeft: "0" }}>
      <div className="navig">
        <div>
          <a className="navbar-brand" href="/">
            Main page
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
        </div>
        <div>
          <h4>Мир чая</h4>
        </div>
        {user ? (
          <>
            <h5>Hello, {user.name}</h5>

            <div className="nav-item">
              <a className="nav-link" href="/api/auth/logout">
                Logout
              </a>
            </div>          
            {(user.isAdmin === "true") ? (
              <div className="nav-item">
                <a className="nav-link" href="/admin">
                  Личный кабинет
                </a>
              </div>) : (
              <div className="nav-item">
                <a className="nav-link" href="/auth/users/userArea">
                  Личный кабинет
                </a>
              </div>)}
          </>
        ) : (
          <>
            <div className="nav-item">
              <a className="nav-link" href="/auth/log">
                Авторизация
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="/auth/reg">
                Регистрация
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
