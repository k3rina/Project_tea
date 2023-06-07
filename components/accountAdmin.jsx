const React = require("react");
const Layout = require("./Layout");

function accountAdmin({ title }) {
  return <Layout title={title} user={user}></Layout>;
}

module.exports = accountAdmin;
