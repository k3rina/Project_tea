const router = require("express").Router();
const { Tea } = require("../../db/models");

router.get("/dot", async (reg, res) => {
  try {
    const teasRaw = await Tea.findAll({ raw: true });
    
    const teas = teasRaw.map((el) => {
      return {
        ...el,
        map: el.map.split(" ").map((el) => +el),
      };
    });
    res.json(teas);
  } catch (error) {
    console.log(error, "-----------------------------------------------");
  }
});

module.exports = router;
