module.exports = {
  "/api/location/addLocation": {
    post: {
      tags: ["Location"],
      summary: "Thêm địa điểm chấm công",
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
                latitude: {
                  type: "number",
                  example: 10.762622,
                  description: "Vĩ độ của địa điểm chấm công",
                },
                longitude: {
                  type: "number",
                  example: 106.660172,
                  description: "Kinh độ của địa điểm chấm công",
                },
                radius: {
                  type: "number",
                  example: 100,
                  description: "Bán kính cho phép tính bằng mét",
                },
              },
              required: ["latitude", "longitude", "radius"],
            },
          },
        },
      },
      responses: {
        201: {
          description: "Thêm địa điểm chấm công thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Thêm địa điểm chấm công thành công",
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
                  error: {
                    type: "string",
                    example: "Thiếu thông tin địa điểm",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Xác thực không thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Không có quyền truy cập",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
