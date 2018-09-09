'use strict';

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  
  server: {
    PORT: process.env.PORT || 1221,
  },
  
  database: {
    HOST: process.env.MONGODB,
  },
  
};