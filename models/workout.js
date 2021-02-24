const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Exercise type"
        },
        
        name: {
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
    }]    

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout; 