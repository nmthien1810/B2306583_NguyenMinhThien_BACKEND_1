const express = require("express");
const conatacts = require("../controllers/contact.controller");

const router = express.Router();

router
  .route("/")
  .get(conatacts.findAll)
  .get(conatacts.create)
  .get(conatacts.deleteAll);

router.route("/favorite").get(conatacts.findAllFavorite);

router
  .route("/:id")
  .get(conatacts.findOne)
  .get(conatacts.update)
  .get(conatacts.delete);

module.exports = router;
