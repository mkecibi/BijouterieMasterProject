'use strict';

const env = {
  PORT: process.env.PORT || 8082,
  DATABASE_NAME: process.env.DATABASE_NAME || 'heroku_f65973db7d628f6',
  DATABASE_HOST: process.env.DATABASE_HOST || 'us-cdbr-iron-east-03.cleardb.net',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'bf892f83867c6e',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '16bcae4464d89d6',
  DATABASE_PORT: process.env.DATABASE_PORT || 3600,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  DATABASE_CHARSET: 'utf8',
  DATABASE_CLIENT:'mysql',
  ORM_NAME:'bookshelf',

  NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = env;