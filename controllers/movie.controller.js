'use strict'

import Movie from '../models/movie.model'

const Datastore = require('@google-cloud/datastore')
const config = require('../config/config')
const shortid = require('shortid')

const datastore = new Datastore({
  keyFilename: './keys/credentials.json'
})

const movieController = {}

movieController.Get = async (req, res) => {

  try {

    const query = datastore.createQuery('User')
    const response = await datastore.runQuery(query)
    return res.status(200).send({ entities: response[0] })

  } catch (err) {

    return res.status(404).send({ err })

  }
}

movieController.Post = async (req, res) => {

  try {

    const { name, release, ranking, imageurl } = req.body

    const kind = 'User'
    const _id = shortid.generate()

    const taskKey = datastore.key([kind, _id])
    const movie = new Movie(_id, name, release, ranking, imageurl, Date.now())

    const task = {
      key: taskKey,
      data: movie
    }

    const response = await datastore.save(task)
    return res.status(200).send(req.body)

  } catch (err) {
    return res.status(404).send({ err })
  }
}

movieController.Put = async (req, res) => {
  await res.status(200).send({ message: 'OK' })
}

movieController.Delete = async (req, res) => {
  await res.status(200).send({ message: 'OK' })
}

module.exports = movieController