module.exports = {
  "/api/user/deleteUser": {
    delete: {
      tags: ["User"],
      summary: "Xóa người dùng theo username",
      security: [
        {
          bearerAuth: [],
        },
      ],
      description:
        "Xóa người dùng dựa trên username được cung cấp trong tham số truy vấn.",
      parameters: [
        {
          name: "username",
          in: "query",
          description: "Username của người dùng cần xóa",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        200: {
          description: "Người dùng đã được xóa thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User deleted successfully",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Yêu cầu không hợp lệ do thiếu username",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Username is required" },
                },
              },
            },
          },
        },
        404: {
          description: "Người dùng không tìm thấy",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "User not found" },
                },
              },
            },
          },
        },
        500: {
          description: "Lỗi khi thực hiện xóa người dùng",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Internal server error" },
                },
              },
            },
          },
        },
      },
    },
  },
};
