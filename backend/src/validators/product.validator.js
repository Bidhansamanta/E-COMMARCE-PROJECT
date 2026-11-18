import { body } from "express-validator";

const creationProductValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Title can not be Empty"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description can not be Empty"),
    body("price")
      .trim()
      .notEmpty()
      .withMessage("Price can not be Empty"),
    body("category")
      .trim()
      .notEmpty()
      .withMessage("Category can not be Empty"),
  ];
};

export { creationProductValidator };
