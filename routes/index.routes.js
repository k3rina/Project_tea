const router = require("express").Router();

const mainRoute = require("./views/main.routes");
const authRoute = require("./views/auth.routes");
const authApiRoute = require("./api/auth.routes");

router.use("/", mainRoute);
router.use("/auth", authRoute);
router.use("/api/auth", authApiRoute);

module.exports = router;
