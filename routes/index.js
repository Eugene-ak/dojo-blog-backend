import express from "express";
import createBlog from "../controllers/create.controller.js";
import findOneBlog from "../controllers/findOne.controller.js";
import findAllBlogs from "../controllers/findAll.controller.js";
import deleteBlog from "../controllers/delete.controller.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/:id", findOneBlog);
router.get("/", findAllBlogs);
router.delete("/:id", deleteBlog);

export default router;
