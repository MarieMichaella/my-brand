

import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

// Use the express.json() middleware to parse incoming JSON data
router.use(express.json());

router.get("/", blogController.getBlogs);

router.get("/:id", blogController.getBlog);

router.post("/", blogController.createBlog);

router.put("/:id", blogController.updateBlog);

router.delete("/:id", blogController.deleteblog);

export default router;
