const router = require("express").Router();
const nonFindStr =require('../../components/nonFindStr')

router.get("/", async (req, res) => {
  res.send(
    res.renderComponent(nonFindStr, {htmlOnly: true})
  );
});

module.exports = router;