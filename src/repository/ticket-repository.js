const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {
  async getAll() {
    try {
      const tickets = await NotificationTicket.findAll();
      return tickets;
    } catch (error) {
      throw error;
    }
  }
  async create(data) {
    try {
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const ticket = await NotificationTicket.findByPk(1);
      console.log(ticket);
      if (data.status) ticket.status = data.status;
      await ticket.save();
      return ticket;
    } catch (error) {
      console.log("Something Went Wrong in the repository Layer");
      throw error;
    }
  }
}

module.exports = TicketRepository;