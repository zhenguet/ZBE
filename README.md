# ZBE Project

## Giới thiệu

ZBE là một ứng dụng Node.js sử dụng Express và Mongoose để cung cấp một API bảo mật. Ứng dụng này sử dụng JWT để xác thực người dùng và Swagger để tài liệu hóa API.

## Các tính năng

- **Bảo mật HTTPS**: Chuyển hướng tất cả các yêu cầu HTTP sang HTTPS để bảo vệ dữ liệu.
- **Xác thực JWT**: Cung cấp xác thực người dùng bằng JWT và xử lý việc đăng xuất.
- **Tài liệu API**: Sử dụng Swagger để tự động tạo tài liệu API cho các endpoint.

## Cài đặt

### Yêu cầu

- [Node.js](https://nodejs.org/) phiên bản 14.x trở lên
- [MongoDB](https://www.mongodb.com/) (cài đặt và cấu hình cơ sở dữ liệu)

### Cài đặt dự án

1. **Clone repository**

  ```bash
   git clone https://github.com/zhenguet/ZBE.git
   cd zbe
  ```

2. **Cài đặt các phụ thuộc**

   Cài đặt các phụ thuộc bằng lệnh:

    <details>
    <summary><strong>NPM</strong></summary>
    
    ```bash
    npm install
    ```
    
    </details>
    
    <details>
    <summary><strong>Yarn</strong></summary>
    
    ```bash
    yarn
    ```
    
    </details>

3. **Tạo file `.env`**

   Tạo file `.env` tại thư mục gốc của dự án và thêm các biến môi trường sau:

   `JWT_SECRET=yourSecretKey`

4. **Chạy ứng dụng**

   Chạy ứng dụng bằng lệnh:

   <details>
    <summary><strong>NPM</strong></summary>
    
    ```bash
    npm start
    ```
    
    </details>
    
    <details>
    <summary><strong>Yarn</strong></summary>
    
    ```bash
    yarn start
    ```
    
    </details>

   Ứng dụng sẽ chạy trên https://localhost:1403/swagger.

## Tài liệu API

Sau khi khởi động ứng dụng, bạn có thể truy cập tài liệu API tại:

- [Swagger UI](https://localhost:3000/swagger)

## Cấu trúc dự án

- **`server.js`**: File chính để cấu hình server và thiết lập các route.
- **`models/`**: Chứa các mô hình Mongoose cho cơ sở dữ liệu.
- **`routes/`**: Chứa các route cho API.
- **`swagger/`**: Chứa file cấu hình Swagger cho tài liệu API.
- **`middleware/`**: Chứa các middleware tùy chỉnh như middleware xác thực.

## Tham khảo

- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Swagger UI Documentation](https://swagger.io/tools/swagger-ui/)

## Giấy phép

Được phát hành theo giấy phép ISC.
