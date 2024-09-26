const updateUser = require("./updateUser");
const getUsers = require("./getUsers");
const deleteUser = require("./deleteUser");

module.exports = {
  ...updateUser,
  ...getUsers,
  ...deleteUser,
};
