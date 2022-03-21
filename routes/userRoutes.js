const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getme,
  getBatchmates,
} = require("../controllers/userController");
const { protectRoute } = require("../middleware/authMiddleware");

router.post("/batchmates", protectRoute, getBatchmates);
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protectRoute, getme);

module.exports = router;
