'use strict'

const valueController = require('../controllers/movie.controller');

module.exports = (app) => {

  const { celebrate, Joi, errors } = require('celebrate')

  app.use(celebrate({
    headers: Joi.object({
      token: Joi.string().required()
    }).unknown()
  }, { escapeHtml: false }
  ));
  app.use(errors());

  app.get('/', valueController.Get)
  app.post('/', valueController.Post)

};