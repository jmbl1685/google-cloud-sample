'use strict'

class Movie {

  constructor(id,name,release,ranking,imageurl,createAt){
    this.id = id
    this.name = name
    this.release = release
    this.ranking = ranking
    this.imageurl = imageurl
    this.createAt = createAt
  }

}

module.exports = Movie