const express = require("express");
const router = express.Router();
const fzController = require("../controllers/fzController");

/* APP ROUTES */
router.get("/", fzController.home);

module.exports = router;
