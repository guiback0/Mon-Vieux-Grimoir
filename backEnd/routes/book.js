const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const optimizeImage = require("../middleware/sharp");
const bookCtrl = require("../controllers/book");

router.get("/", bookCtrl.getAllBook);
router.post("/", auth, multer, optimizeImage, bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, optimizeImage, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.get("/bestrating", bookCtrl.bestRatingBooks);
router.post("/:id/rating", auth, bookCtrl.rateBook);

module.exports = router;
