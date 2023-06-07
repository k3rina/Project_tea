const React = require("react");

function Item({ tea }) {
  //console.log(tea.name);
  return (
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title">{tea.name}</p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

module.exports = Item;
