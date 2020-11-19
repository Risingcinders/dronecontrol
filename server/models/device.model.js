const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Tasks must have a name"],
            minlength: [3, "Names must be at least 3 characters"],
            unique: true,
        },
        key: {
            type: String,
        },
        description: {
            type: String,
            required: [true, "Tasks must have a description"],
            minlength: [3, "Descriptions must be at least 3 characters"],
        },
    },
    { timestamps: true }
);

module.exports.Task = mongoose.model("Task", TaskSchema);
