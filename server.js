const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const userRoute = require("./routes/userRoute");
const transactionsRoute = require("./routes/transactionsRoute");
const groupRoute = require("./routes/groupRoute");

const setupRoutes = (app) => {
  app.use("/api/users", userRoute);
  app.use("/api/transactions", transactionsRoute);
  app.use("/api/groups", groupRoute);
};

const main = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(morgan("dev"));
  setupRoutes(app);
  const port = 4500;
  app.listen(port, () => console.log(`Listening to port ${port}`));
};

main();
