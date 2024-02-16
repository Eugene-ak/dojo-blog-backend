import blogModel from "../models/blog.model.js";

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await blogModel.findByIdAndDelete(id);
    return res.status(204).json({message: "Deleted blog successfully"});
  } catch (err) {
    return res.status(400).json({error: err.message});
  }
}

export default deleteBlog;