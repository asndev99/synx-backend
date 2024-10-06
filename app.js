const express = require("express");
const app = express();
const cors = require("cors");
const reqResInspector = require("express-req-res-inspector");
const rootRouter = require("./Routes/index");
const globalErrorMiddleware = require("./Middlewares/globalError.middleware");
app.use(reqResInspector());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: "Authorization, Content-Type",
  credentials: true,
}));

app.options('*', cors());
app.use("/api/v1", rootRouter);
app.use(globalErrorMiddleware)
module.exports = app;
