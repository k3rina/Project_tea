const router = require("express").Router();

const mapRoute = require("./views/map.routes");
const adminRoute = require("./views/accountAdmin.routes");
const authRoute = require("./views/auth.routes");
const authApiRoute = require("./api/auth.routes");
const authUserAreaRoute = require("./views/auth.routes");
const apiMarksRoute = require("./api/marks.routes");

router.use("/", mapRoute);
router.use("/auth", authRoute);
router.use("/auth/users", authUserAreaRoute);
router.use("/admin", adminRoute);
router.use("/api/auth", authApiRoute);
router.use("/api/marks", apiMarksRoute);

module.exports = router;
