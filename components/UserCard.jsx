const React = require("react");

function UserCard({ comment }) {
  return (
    <div className="card" style={{ marginTop: "10" }}>
      <h5>Comment</h5>
      <div>{comment?.Tea?.name}</div>
      <div className="text-muted">{comment.text}</div>
    </div>
  );
}

module.exports = UserCard;
