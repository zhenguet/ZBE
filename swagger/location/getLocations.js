module.exports = {
  "/api/location/getLocations": {
    get: {
      tags: ["Location"],
      summary: "Lấy danh sách các địa điểm chấm công",
      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "Danh sách địa điểm",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  locations: {
                    type: "array",
                    items: {
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
        },
        404: {
          description: "Không có địa điểm nào",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Không có địa điểm nào" },
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
