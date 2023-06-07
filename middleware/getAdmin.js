const { Admin } = require("../db/models");

async function getAdmin(req, res, next) {
  if (req.session.userId) {
    const admin = await Admin.findOne({ where: { id: req.session.userId } });
    res.locals.admin = { id: admin.id, name: admin.name };
  }
  next();
}

module.exports = getAdmin;
