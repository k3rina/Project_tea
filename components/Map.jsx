const React = require('react');
const Layout = require('./Layout');

const App = () => (
  <Layout>
    <>
      <div id='map' style={{ width: 'auto', height: '1000px' }}></div>
    </>
  </Layout>
);

module.exports = App;
