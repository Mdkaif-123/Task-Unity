
const express = require('express')
const router = express.Router()
const dashboardController = require("../controller/admin/dashboardController")
const userController = require('../controller/admin/userController')
const taskController = require('../controller/admin/taskController')
const { verifyToken, isAdmin } = require('../middleware/authentication')


// Dashboard
router.get("/v1/admin/dashboard", dashboardController.dashboard)

// User CRUD
router.post('/v1/admin/user/register-user', verifyToken, isAdmin, userController.registerUser)
router.put('/v1/admin/user/update-user/:userId', verifyToken, isAdmin, userController.updateUser)
router.delete('/v1/admin/user/delete-user/:userId', verifyToken, isAdmin, userController.deleteUser)

// Task CRUD
router.post("/v1/admin/task/create-task/:userId", verifyToken, isAdmin, taskController.createTask)
router.post("/v1/admin/task/update-task/:taskId", verifyToken, isAdmin, taskController.updateTask)
router.delete("/v1/admin/task/delete-task/:taskId", verifyToken, isAdmin, taskController.deleteTask)


module.exports = router;
