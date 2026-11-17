import { body } from "express-validator";

const registrationValidator = () => {
  return [
    body("userName")
      .trim()
      .notEmpty()
      .withMessage("User Name can not be Empty")
      .isLength({ min: 5, max: 15 })
      .withMessage("User Name can be min 5 char to max 15 char"),
    body("phoneNumber")
      .trim()
      .notEmpty()
      .withMessage("Phone Number Can not be Empty")
      .isLength({ isLength: 10 })
      .withMessage("Invalid Phone Number"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password can not be Empty")
      .isLength({ min: 5, max: 8 })
      .withMessage("Password can be min 5 char to max 8 char"),
  ];
};

const loginValidator = () => {
  return [
    body("phoneNumber")
      .trim()
      .notEmpty()
      .withMessage("Phone Number Can not be Empty")
      .isLength({ isLength: 10 })
      .withMessage("Invalid Phone Number"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password can not be Empty")
      .isLength({ min: 5, max: 8 })
      .withMessage("Password can be min 5 char to max 8 char"),
  ];
};

export { registrationValidator, loginValidator };
