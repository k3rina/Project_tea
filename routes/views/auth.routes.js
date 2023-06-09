const router = require('express').Router();
const Loga = require('../../components/Loga');
const Rega = require('../../components/Rega');
const UserArea = require('../../components/UserArea');
const { Comment, Tea } = require('../../db/models');

router.get('/log', (req, res) => {
  res.send(res.renderComponent(Loga, { title: 'Authorization page' }));
});

router.get('/reg', (req, res) => {
  res.send(res.renderComponent(Rega, { title: 'Registration page' }));
});

router.get('/userArea', async (req, res) => {
  const id = req.session.userId;
  const comments = await Comment.findAll({ where: { user_id: id }, include: {model: Tea } });
  res.send(res.renderComponent(UserArea, { comments }));
});

module.exports = router;
