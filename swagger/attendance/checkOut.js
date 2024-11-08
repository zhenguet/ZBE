module.exports['/api/attendance/checkOut'] = {
	post: {
		tags: ['Attendance'],
		summary: 'Check-out',
		security: [
			{
				bearerAuth: [],
			},
		],
		requestBody: {
			required: true,
			content: {
				'application/json': {
					schema: {
						type: 'object',
						properties: {
							latitude: {
								type: 'number',
								example: 10.762622,
								description: 'Vĩ độ của điểm check-out',
							},
							longitude: {
								type: 'number',
								example: 106.660172,
								description: 'Kinh độ của điểm check-out',
							},
							timestamp: {
								type: 'string',
								format: 'date-time',
								example: '2024-09-25T17:00:00Z',
								description: 'Thời gian check-out theo định dạng ISO 8601',
							},
						},
						required: ['latitude', 'longitude', 'timestamp'],
					},
				},
			},
		},
		responses: {
			200: {
				description: 'Check-out thành công',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								message: {
									type: 'string',
									example: 'Check-out thành công',
								},
							},
						},
					},
				},
			},
			400: {
				description: 'Yêu cầu không hợp lệ',
				content: {
					'application/json': {
						schema: {
							type: 'object',
							properties: {
								error: {
									type: 'string',
									example:
										'Thiếu thông tin check-out hoặc chưa có bản ghi check-in',
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
