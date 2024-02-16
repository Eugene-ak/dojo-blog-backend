import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  }
}, {
  timestamps: true
});

const blogModel = mongoose.model("blog", blogSchema);

export default blogModel;