'use strict';

const {
  AddMovie,
  GetMovies,
  GetMovieByID,
  DeleteMovie,
  UpdateMovie,
} = require('../controllers/movie');

const api = '/api/v1';

module.exports = app => {
  app.get(`${api}/movie`, GetMovies);
  app.get(`${api}/movie/:id`, GetMovieByID);
  app.post(`${api}/movie`, AddMovie);
  app.delete(`${api}/movie/:id`, DeleteMovie);
  app.put(`${api}/movie/:id`, UpdateMovie);
};
