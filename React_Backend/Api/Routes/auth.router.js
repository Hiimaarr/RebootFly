const router = require("express").Router();
const { signUp, login, bulkSignup } = require("../Controllers/auth.controller");

router.post("/signup", signUp);
router.post("/login", login);
router.post("/bulk-signup", bulkSignup);

module.exports = router;
