const router = require('express').Router();
const TeaCards = require('../../components/TeaCards');
const { Tea, User, Comment } = require('../../db/models');

router.get('/:CardId', async (req, res) => {
  try {
    const CardId = req.params.CardId;
    const teas = await Tea.findOne({
      where: { id: CardId },
    });
    const comments = await Comment.findAll({
      where: { tea_id: CardId },
      include: { model: User },
    });
    console.log(comments, '--------------------------');
    res.send(res.renderComponent(TeaCards, { title: 'Tea', teas, comments }));
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
