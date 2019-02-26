'use strict';

const { datastore } = require('../config');
const { errorHandle, movieResponseHandle } = require('../utils');
const { ModelStateIsValid } = require('../models/movie');
const shortid = require('shortid');

exports.AddMovie = async movie => {
  try {
    const { isValid, error } = ModelStateIsValid(movie);
    if (isValid) {
      const id = shortid.generate();
      const key = datastore.key(['Movie', id]);
      const data = Object.assign(movie, { id });
      await datastore.save({ key, data });
      return data;
    }
    throw new Error(error);
  } catch (err) {
    return errorHandle(err);
  }
};

exports.GetMovies = async () => {
  try {
    const query = datastore.createQuery('Movie');
    const data = await datastore.runQuery(query);
    return data[0];
  } catch (err) {
    return errorHandle(err);
  }
};

exports.GetMovieByID = async id => {
  try {
    const key = datastore.key(['Movie', id]);
    const data = await datastore.get(key);
    return movieResponseHandle(data);
  } catch (err) {
    return errorHandle(err);
  }
};

exports.UpdateMovie = async (id, movie) => {
  try {
    const { isValid, error } = ModelStateIsValid(movie);
    if (isValid) {
      const key = datastore.key(['Movie', id]);
      const data = Object.assign(movie, { id });
      await datastore.update({ key, data });
      return data;
    }
    throw new Error(error);
  } catch (err) {
    return errorHandle(err);
  }
};

exports.DeleteMovie = async id => {
  try {
    const key = datastore.key(['Movie', id]);
    return await datastore.delete(key);
  } catch (err) {
    return errorHandle(err);
  }
};
