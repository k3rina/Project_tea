const React = require('react');
const Layout = require('./Layout');

function CommentItem({ comment, user }) {
  return (
    <div className='card' data-id={comment.id}>
      <p>{comment.text}</p>
      <p>{comment?.User?.name}</p>
      {user && (
        <button
          type='button'
          className='btn-danger delete'
          data-id={comment.id}
        >
          Delete
        </button>
      )}
    </div>
  );
}

module.exports = CommentItem;
