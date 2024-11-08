module.exports = {
	'/api/attendance/checkIn': {
		post: {
			tags: ['Attendance'],
			summary: 'Chấm công (Check-In)',
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
									description: 'Vĩ độ của điểm check-in',
								},
								longitude: {
									type: 'number',
									example: 106.660172,
									description: 'Kinh độ của điểm check-in',
								},
								timestamp: {
									type: 'string',
									format: 'date-time',
									example: '2024-09-25T08:00:00Z',
									description: 'Thời gian check-in theo định dạng ISO 8601',
								},
							},
							required: ['latitude', 'longitude', 'timestamp'],
						},
					},
				},
			},
			responses: {
				201: {
					description: 'Check-in thành công',
					content: {
						'application/json': {
							schema: {
								type: 'object',
								properties: {
									message: {
										type: 'string',
										example: 'Check-in thành công',
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
											'Thiếu thông tin check-in hoặc vị trí check-in ngoài khu vực cho phép',
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
	},
};
