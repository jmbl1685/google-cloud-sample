'use strict'

import app from './app'
import config from './config/config'

app.listen(config.server.port, () => {
  console.log(config.server.message)
})

