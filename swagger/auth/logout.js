module.exports = {
  "/api/auth/logout": {
    post: {
      tags: ["Auth"],
      summary: "Đăng xuất người dùng",
      description:
        "Đăng xuất người dùng bằng cách đánh dấu tất cả các token của họ là bị thu hồi.",
      responses: {
        200: {
          description: "Đăng xuất thành công",
        },
        401: {
          description: "Token không hợp lệ hoặc đã bị thu hồi",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Token has been revoked",
                  },
                },
              },
            },
          },
        },
      },
      security: [
        {
          BearerAuth: [],
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
