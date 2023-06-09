const React = require('react');
const Layout = require('./Layout');
const UserCard = require('./UserCard');

function UserArea({ comments, user }) {
  return (
    <Layout user={user}>
      <div
        className='coment-card'
        style={{ margin: ' 0 auto', marginBottom: '25rem', marginTop: '20px' }}
      >
        <h5>Твои коментарии:</h5>
        {comments.map((comment) => (
          <UserCard user={user} comment={comment} key={comment.id} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = UserArea;
