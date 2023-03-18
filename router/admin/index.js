const express = require('express');
// 导入路由
const adminMethods = require('../../router-methods/admin/methods');
const router = express.Router();
const upload = require('../../upload/upload');

// 用户
router.post('/login', adminMethods.Login); // 用户登陆
router.post('/regUser', adminMethods.regUser); // 用户注册
router.get('/usersData', adminMethods.getUsersData); // 获取用户信息
router.post('/updataUser', adminMethods.updataUser); // 修改用户信息
router.delete('/deleteUserData/:id', adminMethods.deleteUserData); // 删除用户信息
router.post('/searchUser', adminMethods.searchUser); // 调价查询用户

// 图书
router.get('/booksData', adminMethods.getBooksData); // 获取图书
router.delete('/deleteBooksData/:id', adminMethods.deleteBooksData);
router.post('/upload', upload.single('file'), adminMethods.uploadFile); // 上传图书信息
router.delete('/batchDeleteBooksData', adminMethods.batchDeleteBooksData); // 批量删除图书信息
router.get('/favoriteBooksData', adminMethods.getFavoriteBooksData); // 获取个人收藏图书
router.post('/addFavoriteBooksData', adminMethods.addFavoriteBooksData); // 添加个人收藏信息
router.delete('/deleteFavoriteBooksData/:data', adminMethods.deleteFavoriteBooksData); // 删除个人收藏
router.post('/addRecommendMessage', adminMethods.addRecommendMessage); // 添加推荐
router.post('/booksBorrow', adminMethods.booksBorrow); // 添加借阅信息
router.get('/getBooksBorrow', adminMethods.getBooksBorrow); // 获取借阅信息
router.post('/returnBooksMessage', adminMethods.returnBooksMessage); // 添加借阅信息
router.delete('/deleteBooksBorrow/:id', adminMethods.deleteBooksBorrow); // 删除用户信息

module.exports = router;