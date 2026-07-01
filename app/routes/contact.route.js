const express = require("express");
const conatacts = require("../controllers/contact.controller");

const router = express.Router();

router
  .route("/")
  .get(conatacts.findAll)
  .post(conatacts.create)
  .delete(conatacts.deleteAll);

router.route("/favorite").get(conatacts.findAllFavorite);

router
  .route("/:id")
  .get(conatacts.findOne)
  .put(conatacts.update)
  .delete(conatacts.delete);

module.exports = router;
