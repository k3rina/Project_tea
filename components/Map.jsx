const React = require("react");
const Layout = require("./Layout");

const App = () => (
  <Layout>
    <>
      <div
        id="map"
        style={{ width: "1200px", height: "1000px", margin: "0 auto" }}
      ></div>
    </>
  </Layout>
);

module.exports = App;
