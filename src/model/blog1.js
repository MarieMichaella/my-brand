import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({

Articlename:
{
    type: String,
    required: true
},

ArticleDescription:
{
    type: String,
    required: true 
},
author:
{
    type: String,
    required: true
},
content:
{
    type: String,
    required: true
},

createAt: {
    type:Date,
    default: Date.now()
},

}); 

const Blog = mongoose.model("Blog", blogSchema)
export default Blog