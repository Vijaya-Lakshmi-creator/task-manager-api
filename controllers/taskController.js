const Task = require("../models/taskModel")

// Create a task
exports.createTask = async (req, res) => {
  console.log("BODY:", req.body)

  try {
    const task = await Task.create(req.body)
    res.status(201).json(task)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    res.json(task)
  } catch (error) {
    res.status(404).json({ message: "Task not found" })
  }
}

// Update task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(task)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: "Task deleted successfully" })
  } catch (error) {
    res.status(404).json({ message: "Task not found" })
  }
}