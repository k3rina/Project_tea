const React = require("react");
const Layout = require("./Layout");

module.exports = function Loga({ title }) {
  return (
    <Layout title={title}>
      <h2>Login</h2>
      <form id="log_form" action="/auth/log" method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="text"
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
        <p style={{ color: "red" }} className="message" />
        <button type="submit" className="btn btn-primary">
          Login user
        </button>
      </form>
    </Layout>
  );
};
