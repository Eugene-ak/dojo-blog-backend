import blogModel from "../models/blog.model.js";

const findAllBlogs = async (req, res) => {
  try {
    const foundBlogs = await blogModel.find();
    return res.status(200).json(foundBlogs);
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

export default findAllBlogs;