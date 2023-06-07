const router = require("express").Router();
const Log = require("../../components/Loga");
const Reg = require("../../components/Rega");

router.get("/log", (req, res) => {
  res.send(res.renderComponent(Loga, { title: "Authorization page" }));
});

router.get("/reg", (req, res) => {
  res.send(res.renderComponent(Rega, { title: "Registration page" }));
});

module.exports = router;