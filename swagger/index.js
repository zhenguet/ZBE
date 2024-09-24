const register = require("./auth/register");
const login = require("./auth/login");
const logout = require("./auth/logout");
const updatePassword = require("./auth/updatePassword");
const updateUser = require("./user/updateUser");
const getUsers = require("./user/getUsers");
const deleteUser = require("./user/deleteUser");

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "API Documentation",
    version: "1.0.0",
    description: "Tài liệu cho các API của hệ thống",
  },
  servers: [
    {
      url: "https://localhost:1403/",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: {
    ...register,
    ...login,
    ...logout,
    ...updatePassword,
    ...updateUser,
    ...getUsers,
    ...deleteUser,
  },
};

module.exports = swaggerDocument;
