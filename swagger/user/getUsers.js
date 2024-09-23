module.exports = {
  "/api/user/getUsers": {
    get: {
      tags: ["User"],
      summary: "Lấy danh sách người dùng",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Danh sách người dùng đã được trả về",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    username: { type: "string" },
                    email: { type: "string" },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Lỗi khi lấy danh sách người dùng",
        },
      },
    },
  },
};
