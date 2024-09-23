module.exports = {
  "/api/user/updateUser": {
    put: {
      tags: ["User"],
      summary: "Cập nhật thông tin người dùng",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "newemail@example.com",
                  description: "Địa chỉ email mới của người dùng",
                },
                fullName: {
                  type: "string",
                  example: "New Full Name",
                  description: "Tên đầy đủ mới của người dùng",
                },
              },
              required: ["email", "fullName"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật thông tin thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User information updated successfully",
                  },
                  userInfo: {
                    type: "object",
                    properties: {
                      username: { type: "string", example: "user123" },
                      email: {
                        type: "string",
                        example: "newemail@example.com",
                      },
                      fullName: { type: "string", example: "New Full Name" },
                    },
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Yêu cầu không hợp lệ",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Invalid request data" },
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
      },
    },
  },
};
