const express = require("express");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const logoutController = require("../controllers/logoutController");
const updateUserInfoController = require("../controllers/updateUserInfoController");
const auth = require("../middleware/auth");
const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Đăng ký người dùng mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Người dùng được tạo thành công
 */
router.post("/register", registerController.register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Đăng nhập người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 */
router.post("/login", loginController.login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Đăng xuất người dùng
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 */
router.post("/logout", logoutController.logout);

/**
 * @swagger
 * /api/auth/update:
 *   post:
 *     summary: Cập nhật thông tin người dùng
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cập nhật thông tin thành công
 *     security:
 *       - bearerAuth: []
 */
router.post("/update", auth, updateUserInfoController.updateUserInfo);

module.exports = router;
