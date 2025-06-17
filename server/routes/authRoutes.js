const express = require('express');
const {Register, Login} = require('../controllers/authLogic.js');
const router = express.Router();

router.route("/auth/register").post(Register);
router.route("/auth/login").post(Login);

module.exports = router;