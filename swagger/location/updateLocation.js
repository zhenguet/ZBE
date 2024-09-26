module.exports = {
  "/api/location/updateLocation/{id}": {
    put: {
      tags: ["Location"],
      summary: "Cập nhật địa điểm chấm công",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
            example: "64b5d55f8e85d9c16d7e18a1",
            description: "ID của địa điểm cần cập nhật",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  example: "Vị trí chính",
                  description: "Tên của địa điểm chấm công",
                },
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
              required: ["name", "latitude", "longitude", "radius"],
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật địa điểm chấm công thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Cập nhật địa điểm chấm công thành công",
                  },
                  updatedLocation: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        example: "64b5d55f8e85d9c16d7e18a1",
                      },
                      name: { type: "string", example: "Vị trí chính" },
                      latitude: { type: "number", example: 10.762622 },
                      longitude: { type: "number", example: 106.660172 },
                      radius: { type: "number", example: 100 },
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
                  error: {
                    type: "string",
                    example: "Thiếu thông tin địa điểm",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "Không tìm thấy địa điểm",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: {
                    type: "string",
                    example: "Không tìm thấy địa điểm để cập nhật",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Lỗi hệ thống",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Lỗi hệ thống" },
                  details: { type: "string", example: "Chi tiết lỗi hệ thống" },
                },
              },
            },
          },
        },
      },
    },
  },
};
