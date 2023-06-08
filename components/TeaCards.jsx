const React = require('react');
const Layout = require('./Layout');

function TeaCards({ teas, user }) {
  return (
    <Layout user={user}>
      <h1>{teas.name}</h1>
      <img src={teas.image} alt='card' />
      <p>{teas.description}</p>
    </Layout>
  );
}

module.exports = TeaCards;
