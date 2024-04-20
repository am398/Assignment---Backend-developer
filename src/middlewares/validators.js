const Joi = require('joi');
const { OTP_LENGTH } = require('../utils/constants');
const { verifyToken } = require('../utils/jwt');

const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(8).required();
const otpSchema = Joi.string().length(OTP_LENGTH).required();
const locationSchema = Joi.string().required();
const ageSchema = Joi.number().integer().min(1).max(120).required();
const workDetailsSchema = Joi.string().required();

const validateRegisterData = (req, res, next) => {
  const { error } = Joi.object({
    email: emailSchema,
    password: passwordSchema
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const validateOTP = (req, res, next) => {
  const { error } = otpSchema.validate(req.body.otp);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next()
};

const validateUserData = (req, res, next) => {
  const { error } = Joi.object({
    location: locationSchema,
    age: ageSchema,
    workDetails: workDetailsSchema
  }).validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

module.exports = {
  validateRegisterData,
  validateOTP,
  validateUserData
};