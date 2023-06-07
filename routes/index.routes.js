const router = require("express").Router();

const authRoute = require("./views/auth.routes");
const authApiRoute = require("./api/auth.routes");

router.use("/auth", authRoute);
router.use("/api/auth", authApiRoute);

module.exports = router;