const router = require("express").Router();
const accountAdmin = require("../../components/accountAdmin");

router.get("/admin", (req, res) => {
  res.send(
    res.renderComponent(accountAdmin, { title: "Admin's Account", teas })
  );
});

module.exports = router;
