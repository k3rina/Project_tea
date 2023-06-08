const React = require("react");
const Layout = require("./Layout");
const Item = require("./Item");
const FormAddTea = require("./FormAddTea");

function accountAdmin({ title, teas = [], user}) {
  // console.log(teas);
  return (
    <Layout title={title} user={user}>
      <hr />
      <FormAddTea />
      <br />
      <br />
      <div className="teas">
        {teas.map((tea) => (
          <Item tea={tea} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = accountAdmin;
