const register = require("./auth/register");
const login = require("./auth/login");
const logout = require("./auth/logout");
const update = require("./auth/update");
const getUsers = require("./auth/getUsers");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Tài liệu cho các API của hệ thống",
  },
  servers: [
    {
      url: "http://localhost:1403",
    },
  ],
  paths: {
    //#region DELETE methods

    //#endregion

    //#region GET methods
    ...getUsers,
    //#endregion

    //#region POST methods
    ...register,
    ...login,
    ...logout,
    ...update,
    //#endregion

    //#region PUT methods

    //#endregion
  },
};

module.exports = swaggerDocument;
