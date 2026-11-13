const mongoose = require("mongoose");

//Schema is a Class constructor provided by the Mongoose library. schema is the class. mongoose is js module object.
//a module object contains classes methods etc etc.
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is required"],
      trim: true,
    },
    date: {
      type: String, // Matches your frontend "YYYY-MM-DD" format
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically generates createdAt and updatedAt Date fields
  },
);
//We are converting taskschema to a class constructor whose name will be task and we can import it in other files.
//Mongoose model is the engine to do this conversion and module.export exports it 
module.exports = mongoose.model("Task", taskSchema);