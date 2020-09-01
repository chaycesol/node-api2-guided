const express = require('express')

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ hello: "World!"});
});
router.post("/", (req, res) => {
    res.status(200).json({ hello: "World!"});
});
router.put("/:id", (req, res) => {
    res.status(200).json({ hello: "World!"});
});
router.delete("/:id", (req, res) => {
    res.status(200).json({ hello: "World!"});
});

module.exports = router;