module.exports['/api/attendance/{username}'] = {
	get: {
		tags: ['Attendance'],
		summary: 'Lấy danh sách chấm công theo user',
		security: [
			{
				bearerAuth: [],
			},
		],
		parameters: [
			{
				name: 'username',
				in: 'path',
				required: true,
				schema: {
					type: 'string',
					example: 'johndoe',
				},
				description: 'Username của người dùng để lấy danh sách chấm công',
			},
		],
		responses: {
			200: {
				description: 'Danh sách chấm công của người dùng',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								data: {
									type: 'array',
									items: {
										type: 'object',
										properties: {
											username: { type: 'string', example: 'johndoe' },
											checkIn: {
												type: 'object',
												properties: {
													latitude: { type: 'number', example: 10.762622 },
													longitude: { type: 'number', example: 106.660172 },
													timestamp: {
														type: 'string',
														format: 'date-time',
														example: '2024-09-25T08:00:00Z',
													},
												},
											},
											checkOut: {
												type: 'object',
												properties: {
													latitude: { type: 'number', example: 10.762622 },
													longitude: { type: 'number', example: 106.660172 },
													timestamp: {
														type: 'string',
														format: 'date-time',
														example: '2024-09-25T17:00:00Z',
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
			},
			404: {
				description: 'Không tìm thấy bản ghi chấm công nào',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								error: {
									type: 'string',
									example: 'Không có bản ghi chấm công nào',
								},
							},
						},
					},
				},
			},
			401: {
				description: 'Xác thực không thành công',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									example: 'Không có quyền truy cập',
								},
							},
						},
					},
				},
			},
			500: {
				description: 'Lỗi hệ thống',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								error: {
									type: 'string',
									example: 'Lỗi hệ thống',
								},
							},
						},
					},
				},
			},
		},
	},
};
