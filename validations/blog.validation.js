import Joi from "joi";

export const blogValidation = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  author: Joi.string().required()
});