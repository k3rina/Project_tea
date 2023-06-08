const React = require("react");

function Item({ tea }) {
  return (
    <>
      <div data-id={tea.id} className="card" style={{ width: "18rem" }}>
        {/* <p className="card-img-top">{tea.image}</p> */}
        <img src={tea.image} className="card-img-top" alt="чай" />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.locatrsion}</p>
          <p className="card-text">{tea.description}</p>
          <button type="button" className="btn btn-danger btn-delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

module.exports = Item;
