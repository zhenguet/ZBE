module.exports = {
  "/api/user/update": {
    post: {
      tags: ["User"],
      summary: "Cập nhật thông tin người dùng",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                phoneNumber: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật thông tin thành công",
        },
      },
    },
  },
};
