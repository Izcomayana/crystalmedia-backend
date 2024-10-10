'use strict';

/**
 * lorem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lorem.lorem');
