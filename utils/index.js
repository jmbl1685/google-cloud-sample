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

exports.errorHandle = err => {
  return { error: err.message, status: 400 };
};

exports.statusHandle = ({ status }) => {
  return (status === undefined) | null ? 200 : status;
};

exports.movieResponseHandle = data => {
  return data[0] === undefined ? { message: 'Movie not found' } : data[0];
};
