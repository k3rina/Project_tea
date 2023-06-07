const React = require("react");
const Layout = require("./Layout");

module.exports = function Rega({ title }) {
  return (
    <Layout title={title}>
      <h2>Регистрация</h2>
      <form id="reg_form" action="/api/auth/reg" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Config password
          </label>
          <input
            name="cpassword"
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            required
          />
        </div>
        <p style={{ color: 'red' }} className="message" />
        <button type="submit" className="btn btn-primary">
          Reg user
        </button>
      </form>
    </Layout>
  );
};