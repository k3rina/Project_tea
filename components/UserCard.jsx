const React = require('react');

function UserCard({ comment }) {
  return (
    <h3>
      Comment
      <small class='text-muted'>{comment.text}</small>
    </h3>
  );
}

module.exports = UserCard;
