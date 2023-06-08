const router = require("express").Router();

<<<<<<< HEAD
const router = require('express').Router();

const mapRoute = require('./views/map.routes');
const adminRoute = require('./views/accountAdmin.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');
const authUserAreaRoute = require('./views/auth.routes');
const accountApiRouter = require('./api/accountAdmin.routes')

router.use('/', mapRoute);
router.use('/auth', authRoute);
router.use('/api/auth', authApiRoute);
router.use('/auth/users', authUserAreaRoute);
router.use('/admin', adminRoute);
router.use('/api/admin', accountApiRouter);
=======
const mapRoute = require("./views/map.routes");
const adminRoute = require("./views/accountAdmin.routes");
const authRoute = require("./views/auth.routes");
const authApiRoute = require("./api/auth.routes");
const authUserAreaRoute = require("./views/auth.routes");
const apiMarksRoute = require("./api/marks.routes");
>>>>>>> 7f5af8bf9b83e3a7d9300aeb5f641ecb1e8cd5d8

router.use("/", mapRoute);
router.use("/auth", authRoute);
router.use("/auth/users", authUserAreaRoute);
router.use("/admin", adminRoute);
router.use("/api/auth", authApiRoute);
router.use("/api/marks", apiMarksRoute);

module.exports = router;
