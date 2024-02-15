const express = require('express');
const router=express.Router();
const userController = require("../controllers/user");


router.use("/ceyda", userController.ceyda);
router.use("/memet", userController.memet);
router.use("/", userController.index);
module.exports = router;
