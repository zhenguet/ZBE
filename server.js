require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const attendanceRoutes = require("./routes/attendance");
const locationRoutes = require("./routes/location");

const app = express();

const sslOptions = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.cert"),
};

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  "mongodb+srv://zuet:dbZuetPassword@cluster0.yh11lns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
  if (req.protocol !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

app.get("/", (req, res) => {
  res.redirect("/swagger");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/location", locationRoutes);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server running on port ${PORT} (HTTPS)`);
});
