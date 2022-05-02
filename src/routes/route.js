const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const Middleware=require("../middleware/auth")


router.post("/createAuthor", authorController.createAuthor)

router.post("/login", authorController.authorLogIn)

router.post("/createBlog",Middleware.authentication,Middleware.authorization, blogController.createBlog)

router.get("/getBlogList",Middleware.authentication, blogController.Bloglist)

router.put("/blogs/:blogId", Middleware.authentication,Middleware.authorization,blogController.BlogById)

router.delete("/blogs", Middleware.authentication,Middleware.authorization,blogController.updateBlogData)

router.delete("/blog/:blogId",Middleware.authentication,Middleware.authorization,blogController.deleteBlogData)

module.exports = router;

