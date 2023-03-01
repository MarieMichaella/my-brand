import Blog from "../model/blog1.js"

class blogController {
static async  getBlogs(req, res){
    try {
        const blogs = await Blog.find()
      res.status(200).json({
        data: blogs

      })

    }
        catch(error){
            console.log(error);
         res.status(500).json({
            message: "Server error "
         })
        }
    }

}