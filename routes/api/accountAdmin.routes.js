const router = require("express").Router();
const { Tea } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const teas = await Tea.findAll({ raw: true });
    console.log(teas);
    res.json(teas);
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
