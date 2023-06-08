const router = require("express").Router();
const { Tea } = require("../../db/models");
const accountAdmin = require("../../components/accountAdmin");

router.get("/", async (req, res) => {
  const teas = await Tea.findAll({ order: [["id", "ASC"]] });
  res.send(
    res.renderComponent(accountAdmin, { title: "Admin's Account", teas })
  );
});

module.exports = router;
