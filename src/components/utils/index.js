export const validateLogin = (username, password) => {
  let validate = true;
  if (username !== "demo") {
    validate = false;
  }
  if (password !== "demo") {
    validate = false;
  }
  return validate;
};
