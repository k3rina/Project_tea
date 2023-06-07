const router = require('express').Router();
// const MainPage = require('../../components/MainPage');
const App = require('../../components/Map');

// router.get('/', (req, res) => {
//   res.send(res.renderComponent(MainPage, { title: 'Main page' }));
// });

// const Map = require("../../components/Map");

router.get('/', (req, res) => {
  res.send(res.renderComponent(App, { title: 'Map' }));
});

module.exports = router;
