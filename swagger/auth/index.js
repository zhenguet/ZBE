const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const updatePassword = require("./updatePassword");

module.exports = {
  ...register,
  ...login,
  ...logout,
  ...updatePassword,
};
