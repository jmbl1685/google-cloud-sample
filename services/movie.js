'use strict';

const { datastore } = require('../config');
const { ErrorHandle } = require('../utils');
const { ModelStateIsValid } = require('../models/movie');
const shortid = require('shortid');

exports.AddMovie = async movie => {
  try {
    const { isValid, error } = ModelStateIsValid(movie);
    if (isValid) {
      const _id = shortid.generate();
      const key = datastore.key(['Movie', _id]);
      return await datastore.save({
        key,
        data: Object.assign(movie, { _id }),
      });
    }
    throw new Error(error);
  } catch (err) {
    return ErrorHandle(err);
  }
};

exports.GetMovies = async () => {
  try {
    const query = datastore.createQuery('Movie');
    const data = await datastore.runQuery(query);
    return data[0];
  } catch (err) {
    return ErrorHandle(err);
  }
};

exports.GetMovieByID = async id => {
  try {
    const key = datastore.key(['Movie', id]);
    return await datastore.get(key);
  } catch (err) {
    return ErrorHandle(err);
  }
};

exports.UpdateMovie = async (id, movie) => {
  try {
    const { isValid, error } = ModelStateIsValid(movie);
    if (isValid) {
      const key = datastore.key(['Movie', id]);
      return await datastore.update({
        key,
        data: Object.assign(movie, { id }),
      });
    }
    throw new Error(error);
  } catch (err) {
    return ErrorHandle(err);
  }
};

exports.DeleteMovie = async (id, movie) => {
  try {
    const key = datastore.key(['Movie', id]);
    return await datastore.delete(key);
  } catch (err) {
    return ErrorHandle(err);
  }
};
