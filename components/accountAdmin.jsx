const React = require("react");
const Layout = require("./Layout");
const TeaItem = require("./TeaItem");

function accountAdmin({ title, teas }) {
  console.log(teas);
  return (
    <Layout title={title} user={user}>
      <TeaItem />
      <div className="animals_list">
        {teas.map((tea) => (
          <TeaItem tea={tea} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = accountAdmin;
