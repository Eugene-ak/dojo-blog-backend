import blogModel from "../models/blog.model.js";

const findOneBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const foundBlog = await blogModel.findById(id);
    return res.status(200).json(foundBlog);
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

export default findOneBlog;