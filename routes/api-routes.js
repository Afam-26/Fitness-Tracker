const router = require("express").Router();
const db = require("../models");

router.post("/api/Workout", ({ body }, res) => {
    db.create(body)
      
        res.json();
      
      
});

module.exports = router;