const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./src/config/server-config");
const sendBasicEmail = require("./src/services/email-service");
const jobs = require("./src/utils/job");
const TicketController = require("./src/controllers/ticket-controller");
const { createChannel } = require("./src/utils/message-queue");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const channel = await createChannel();
  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);

    // sendBasicEmail(
    //   "support@gmail.com",
    //   "mara21aiml@cmrit.ac.in",
    //   "Summer Internship @ CiSTUP, IISc: Preliminary Screening ",
    //   ""
    // );
    // jobs();
  });
};

setupAndStartServer();
