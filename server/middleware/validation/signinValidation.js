const Joi = require('joi');
const boomify = require('../../utilis/boomify');

const signinValidation = async (req, res, next) => {
  const { email, password } = req.body;
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required()
      .messages({
        'string.min': 'password should be at least 8 characters',
        'any.required': 'password is a required field',
      }),
  });
  try {
    await schema.validateAsync(
      { email, password },
      { abortEarly: false },

    );
    next();
  } catch (error) {
    next(boomify(400, error.details.map((e) => e.message).join('\n')));
    console.log(error,254);
  }
};
module.exports = signinValidation;
