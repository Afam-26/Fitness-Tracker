const router = require("express").Router();
const db = require("../models");

router.post("/api/Workout", ({ body }, res) => {
    db.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;