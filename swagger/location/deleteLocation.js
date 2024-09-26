module.exports = {
  "/api/location/deleteLocation/{id}": {
    delete: {
      tags: ["Location"],
      summary: "Xóa địa điểm chấm công",
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
          description: "ID của địa điểm cần xóa",
        },
      ],
      responses: {
        200: {
          description: "Xóa địa điểm thành công",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Xóa địa điểm thành công",
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
