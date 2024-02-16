import blogModel from "../models/blog.model.js";
import { blogValidation } from "../validations/blog.validation.js";

const createBlog = async (req, res) => {
  try {
    const data = await blogValidation.validateAsync(req.body);
    const newBlog = await blogModel.create({...data});
    return res.status(201).json({message: "New blog created!"});
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

export default createBlog;