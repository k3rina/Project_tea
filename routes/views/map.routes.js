const router = require("express").Router();
const App = require("../../components/Map");
// const Map = require("../../components/Map");

router.get("/", (req, res) => {
  res.send(res.renderComponent(App, { title: "Map" }));
});

module.exports = router;
