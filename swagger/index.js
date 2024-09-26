const authAPIs = require("./auth");
const userAPIs = require("./user");
const attendanceAPIs = require("./attendance");
const locationAPIs = require("./location");

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
    ...authAPIs,
    ...userAPIs,
    ...attendanceAPIs,
    ...locationAPIs,
  },
};

module.exports = swaggerDocument;
