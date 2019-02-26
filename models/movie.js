'use strict';

const { ModelStateIsValid } = require('../utils');
const Joi = require('joi');

function ValidateSchema(json) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(150)
      .required(),
    release: Joi.number()
      .integer()
      .min(1890)
      .max(2030)
      .required(),
    ranking: Joi.number()
      .min(1)
      .max(10)
      .required(),
    imageurl: Joi.string()
      .min(5)
      .max(800)
      .required(),
  };
  return ModelStateIsValid(json, schema);
}

module.exports.ModelStateIsValid = ValidateSchema;
