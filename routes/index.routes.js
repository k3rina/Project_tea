
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


module.exports = router;
