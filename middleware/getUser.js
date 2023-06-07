const { User } = require('../db/models');

async function getUser(req, res, next) {
  if (req.session.userId) {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.locals.user = { id: user.id, name: user.name, isAdmin: user.isAdmin };
  }
  next();
}

module.exports = getUser;