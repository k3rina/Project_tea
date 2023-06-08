const router = require('express').Router();
const TeaCards = require('../../components/TeaCards');
const { Tea } = require('../../db/models');

router.get('/:cardId', async (req, res) => {
  try {
    const id = req.params.cardId;
    console.log(req.params);
    const teas = await Tea.findOne({ where: { id: id } });
    res.send(res.renderComponent(TeaCards, { title: 'Tea', teas }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
