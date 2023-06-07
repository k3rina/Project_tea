const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./UserCard');

function UserArea({ comments, user }) {
  return (
    <Layout>
      <div className='card coment-card'>
        {comments.map((comment) => (
          <UserCard comment={comment} key={comment.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = UserArea;
