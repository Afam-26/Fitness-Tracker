const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
  db.Workout.create({}, (err, data) => {
    if (err) return err;
    else res.json(data);
  })

});

router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: {
        $sum: '$exercises.duration',
      },
    },
  }])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, (err, data) => {
    if (err) return err;
    else res.json(data);
  })
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.aggregate([{
    $addFields: {
      totalDuration: { 
        $sum: "$exercises.duration" 
      },
    },
  }, 
  { $limit: 7 }
  ])
  .then((data) => {
    res.json(data);
  });

});


module.exports = router;