const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./UserCard');

function UserArea({ comments, user }) {
  return (
    <Layout user={user}>
      <div className='card coment-card'>
        {comments.map((comment) => (
          <UserCard user={user} comment={comment} key={comment.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = UserArea;
