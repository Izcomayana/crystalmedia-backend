'use strict';

/**
 * lorem router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lorem.lorem');
