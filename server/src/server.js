require("express-async-errors");
require("dotenv/config");
const AppError = require("./utils/AppError");
const sqliteConnection = require("./database/sqlite");
const uploadConfig = require("./configs/uploads");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");

sqliteConnection();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

// standardizing the errors
app.use((error, request, response, next) => {
  // comparing the error with AppError to statusCode 400
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
})

const PORT = process.env.PORT || 3333;
app.listen(PORT, (() => console.log(`Server is running on ${PORT}`))
);