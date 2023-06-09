const router = require('express').Router();

const mapRoute = require('./views/map.routes');
const adminRoute = require('./views/accountAdmin.routes');
const authRoute = require('./views/auth.routes');
const authApiRoute = require('./api/auth.routes');
const authUserAreaRoute = require('./views/auth.routes');
const apiMarksRoute = require('./api/marks.routes');
const adminApiRoute = require('./api/accountAdmin.routes');
const cardsTeaRoute = require('./views/card.routes');
const commnetApiRouter = require('./api/comment.routes');
const nonFindStr = require('./views/404str.routes')

router.use('/', mapRoute);
router.use('/card', cardsTeaRoute);
router.use('/auth', authRoute);
router.use('/api/auth', authApiRoute);
// router.use('/auth/users', authUserAreaRoute);
router.use('/api/card', commnetApiRouter);
router.use('/admin', adminRoute);
router.use('/api/admin', adminApiRoute);
router.use('/api/marks', apiMarksRoute);
router.use('/*', nonFindStr)

module.exports = router;
