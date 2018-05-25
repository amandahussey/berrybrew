'use strict';

const { db } = require('./server/db/models')
const app = require('./server/app')
const PORT = 5000;

db.sync()
.then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`Ready to brew some berries on port ${PORT}`))
});
