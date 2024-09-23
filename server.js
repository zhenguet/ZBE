const express = require("express");
const mongoose = require("mongoose");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger"); // Import Swagger

const PORT = process.env.PORT || 1403;
const MONGO_URI =
  "mongodb+srv://zuet:dbZuetPassword@cluster0.yh11lns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
