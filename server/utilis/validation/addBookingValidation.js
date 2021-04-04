const Joi = require('joi');

const addBookingValidation = Joi.object({
  userId: Joi.number().required(),
  serviceId: Joi.number().required(),
  stylistId: Joi.number().required(),
  appointmentDate: Joi.date().required(),
  // eslint-disable-next-line no-useless-escape
  appointmentTime: Joi.string().regex(/^([0-9]{2})\:([0]{2})$/).required(),
});

module.exports = addBookingValidation;
