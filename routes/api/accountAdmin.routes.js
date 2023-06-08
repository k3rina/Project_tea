const router = require("express").Router();
const { Tea } = require("../../db/models");
const Item = require("../../components/Item")

router.get("/", async (req, res) => {
  try {
    const teas = await Tea.findAll({ raw: true });
    // console.log(teas);
    res.json(teas);
  } catch ({ message }) {
    res.json({ message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name, image, location, description, map } = req.body;
    const newTea = await Tea.create({
      name,
      image,
      location,
      description,
      map,
    });
    // console.log(newTea);
    res.json({
      message: 'success',
      html: res.renderComponent(Item, { tea: newTea }, { htmlOnly: true }),
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const result = await Tea.destroy({ where: { id: teaId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
