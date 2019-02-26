'use strict';

const Joi = require('joi');

exports.ModelStateIsValid = (model, schema) => {
  const JoiSchema = Joi.object().keys(schema);
  const { error } = Joi.validate(model, JoiSchema);
  const state = error == null ? true : false;
  return {
    isValid: state,
    error: state ? '' : error.message,
  };
};

exports.ErrorHandle = err => {
  return { error: err.message, status: 400 };
};

exports.StatusHandle = ({ status }) => {
  return (status === undefined) | null ? 200 : status;
};
