const sender = require("../config/email-config");
const TicketRepository = require("../repository/ticket-repository");
const repo = new TicketRepository();

const sendBasicEmail = async (mailfrom, mailto, mailSubject, mailBody) => {
  try {
    sender.sendMail({
      from: `${mailfrom} <xxx@gmail.com>`,
      to: mailto,
      subject: mailSubject,
      html: mailBody,
    });
  } catch (error) {
    console.log(error);
  }
};

const fethPendingEmails = async (timestamp) => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};
const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
const updateTicket = async (ticketId, data) => {
  try {
    const response = await repo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fethPendingEmails,
  createNotification,
  updateTicket,
};
