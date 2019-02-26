'use strict';

const {
  AddMovie,
  GetMovies,
  GetMovieByID,
  DeleteMovie,
  UpdateMovie,
} = require('../services/movie');

const { StatusHandle } = require('../utils');

exports.AddMovie = async (req, res) => {
  const { movie } = req.body;
  const data = await AddMovie(movie);
  res.status(StatusHandle(data)).send(data);
};

exports.GetMovies = async (req, res) => {
  const data = await GetMovies();
  res.status(StatusHandle(data)).send(data);
};

exports.GetMovieByID = async (req, res) => {
  const { id } = req.params;
  const data = await GetMovieByID(id);
  res.status(StatusHandle(data)).send(data);
};

exports.DeleteMovie = async (req, res) => {
  const { id } = req.params;
  const data = await DeleteMovie(id);
  res.status(StatusHandle(data)).send(data);
};

exports.UpdateMovie = async (req, res) => {
  const { id } = req.params;
  const { movie } = req.body;
  const data = await UpdateMovie(id, movie);
  res.status(StatusHandle(data)).send(data);
};
