const express = require("express");
const router = express.Router();
const fzController = require("../controllers/fzController");

/* APP ROUTES */
router.get("/", fzController.home);
router.get("/catalogue", fzController.exploreCatalogue);
router.get("/all-brands", fzController.exploreAllBrands);

module.exports = router;
