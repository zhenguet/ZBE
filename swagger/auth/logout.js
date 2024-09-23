module.exports = {
  "/api/auth/logout": {
    post: {
      tags: ["Auth"],
      summary: "Đăng xuất người dùng",
      responses: {
        200: {
          description: "Đăng xuất thành công",
        },
      },
    },
  },
};
