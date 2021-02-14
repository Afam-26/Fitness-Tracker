const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    timeCreated: {
        type: Date,
        default: Date.now
    },

    exerciseType: {
        type: String,
        trim: true,
        required: "Exercise type"
    },

    exerciseName: {
        type: String,
        trim: true,
        required: "Exercise name"
    },

    weight: {
        type: String,
        trim: true
    },

    sets: {
        type: String,
        trim: true
    },

    reps: {
        type: String,
        trim: true
    },

    duration: {
        type: String,
        trim: true,
        required: "Time in minutes"
    }

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;