const express = require("express");
const router = express.Router();
const receipt = require("../controllers/receipt.js");


router.get("/get", receipt.getReceipts);
router.put("/edit", receipt.editReceipt);
router.post("/create", receipt.createReceipt);
router.delete("/delete", receipt.deleteReceipt);

module.exports = router;