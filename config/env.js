'use strict';

const env = {
  PORT: process.env.PORT || 8082,
  DATABASE_NAME: process.env.DATABASE_NAME || 'BijouterieMaster',
  DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'mous2058',
  DATABASE_PORT: process.env.DATABASE_PORT || 5432,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
  DATABASE_CHARSET: 'utf8',
  DATABASE_CLIENT:'mysql',
  ORM_NAME:'bookshelf',

  NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = env;