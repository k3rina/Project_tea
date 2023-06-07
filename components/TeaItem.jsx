const React = require("react");
const Layout = require("./Layout");

function TeaItem({ title, teas }) {
  <Layout title={title}>
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <p class="modal-title">Modal title</p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </Layout>;
}

module.exports = TeaItem;
