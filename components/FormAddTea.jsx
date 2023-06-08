const React = require("react");
function FormAddTea() {
  return (
    <form className="addteas" id="add-tea" action="/api/teas" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Tea name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Image
        </label>
        <input
          name="image"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Location
        </label>
        <input
          name="location"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <input
          name="description"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Tea
      </button>
    </form>
  );
}
module.exports = FormAddTea;
