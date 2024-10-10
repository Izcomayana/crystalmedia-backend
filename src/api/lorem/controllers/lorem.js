'use strict';

/**
 * lorem controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::lorem.lorem');
