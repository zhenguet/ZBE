module.exports = {
  "/api/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Đăng nhập người dùng",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Đăng nhập thành công",
        },
      },
    },
  },
};
