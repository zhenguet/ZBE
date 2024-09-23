const register = require("./auth/register");
const login = require("./auth/login");
const logout = require("./auth/logout");
const update = require("./user/update");
const getUsers = require("./user/getUsers");

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
    ...update,
    ...getUsers,
  },
};

module.exports = swaggerDocument;
