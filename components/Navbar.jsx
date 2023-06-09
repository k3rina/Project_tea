const React = require("react");

module.exports = function Navigation({ user }) {
  return (
    <nav className="stil container" style={{ width: "100vw", marginLeft: "0" }}>
      <div className="navig">
        <div className="glav">
          <a className="btn1 nav-link" href="/">
            Главная
          </a>
          <button
            className="btn1 navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {user && (
            <>
              <a className="nav-link">Привет, {user.name}</a>
            </>
          )}
        </div>
        <div>
          <h4>Мир чая</h4>
        </div>
        {user ? (
          <>
            {user.isAdmin === "true" ? (
              <div className="nav-item">
                <a className="btn1 nav-link" href="/admin">
                  Личный кабинет
                </a>
              </div>
            ) : (
              <div className="nav-item">
                <a className="btn1 nav-link" href="/auth/userArea">
                  Личный кабинет
                </a>
              </div>
            )}
            <div className="nav-item">
              <a className="btn1 nav-link" href="/api/auth/logout">
                Выйти
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="luboe glav nav-item">
              <a className="btn1 nav-link" href="/auth/log">
                Авторизация
              </a>

              <a className="btn1 nav-link" href="/auth/reg">
                Регистрация
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
