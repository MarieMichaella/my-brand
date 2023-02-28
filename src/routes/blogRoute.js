

import express from "express";
import blogController from "../controllers/blogController.js";
import restrictDelete from "../middleware/restrictDelete.js";
import multer from "multer";

const router = express.Router();

// Use the express.json() middleware to parse incoming JSON data
router.use(express.json());

// Define the storage for multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

// Create a multer middleware function
const upload = multer({ storage: storage });

// Add the multer middleware to the route for creating a blog
router.post("/", upload.single("image"), blogController.createBlog);

router.get("/", blogController.getBlogs);

router.get("/:id", blogController.getBlog);

router.put("/:id", blogController.updateBlog);

router.post("/:id/comments", blogController.addComment)



router.delete("/:id", restrictDelete, blogController.deleteblog);

export default router;
