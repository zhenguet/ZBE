module.exports = {
  "/api/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký người dùng mới",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: { type: "string" },
                password: { type: "string" },
                email: { type: "string" },
                fullName: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Người dùng được tạo thành công",
        },
      },
    },
  },
};
