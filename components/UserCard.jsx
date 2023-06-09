const React = require('react');

function UserCard({ comment }) {
  return (
    <div
      className='card'
      style={{
        width: '20rem',
        margin: '0 auto',
        marginTop: '20px',
        marginBottom: '10px',
        padding: '5px',
      }}
    >
      <h5>Comment</h5>
      <div>{comment?.Tea?.name}</div>
      <div className='text-muted'>{comment.text}</div>
    </div>
  );
}

module.exports = UserCard;
