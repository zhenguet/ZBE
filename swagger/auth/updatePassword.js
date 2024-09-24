module.exports = {
  "/api/auth/updatePassword": {
    post: {
      tags: ["Auth"],
      summary: "Cập nhật mật khẩu người dùng",
      description:
        "Cập nhật mật khẩu của người dùng hiện tại. Yêu cầu xác thực bằng JWT.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                oldPassword: {
                  type: "string",
                  example: "oldPassword123",
                },
                newPassword: {
                  type: "string",
                  example: "newPassword123",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Mật khẩu đã được cập nhật thành công",
        },
        400: {
          description:
            "Lỗi khi cập nhật mật khẩu, có thể là mật khẩu cũ không đúng",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Incorrect old password",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Người dùng không tồn tại",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User not found",
                  },
                },
              },
            },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
  },
  components: {
    securitySchemes: {
      BearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
