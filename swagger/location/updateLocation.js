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
            example: "6511c5b9b9b57f9a3e2a1112",
          },
          description: "ID của địa điểm cần cập nhật",
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
        200: {
          description: "Cập nhật địa điểm thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Cập nhật địa điểm thành công",
                  },
                  updatedLocation: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6511c5b9b9b57f9a3e2a1112",
                      },
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
          description: "Địa điểm không tồn tại",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string", example: "Địa điểm không tồn tại" },
                },
              },
            },
          },
        },
      },
    },
  },
};
