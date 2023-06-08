const React = require("react");
const Layout = require("./Layout");
const Item = require("./Item");
const FormAddTea = require("./FormAddTea");

function accountAdmin({ title, teas = [] }) {
  // console.log(teas);
  return (
    <Layout title={title}>
      <FormAddTea />
      <br />
      <div className="teas_list">
        {teas.map((tea) => (
          <Item tea={tea} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = accountAdmin;
