const router = require('express').Router();
const CommentItem = require('../../components/CommentItem');
const { Comment } = require('../../db/models');

router.post('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { comment } = req.body;
    const data = await Comment.create({
      text: comment,
      user_id: req.session.userId,
      tea_id: id,
    });
    res.json({
      message: 'ok',
      html: res.renderComponent(
        CommentItem,
        { comment: data },
        { htmlOnly: true }
      ),
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Comment.destroy({
      where: { id: id, user_id: req.session.userId },
    });
    if (data > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
