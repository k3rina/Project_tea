const React = require('react');
const Layout = require('./Layout');

const App = ({ user, title }) => (
  <Layout user={user} title={title}>
    <>
      <div id='map' style={{ width: 'auto', height: '100vh' }}></div>
    </>
  </Layout>
);

module.exports = App;
