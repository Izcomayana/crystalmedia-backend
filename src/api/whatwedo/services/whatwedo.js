'use strict';

/**
 * whatwedo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatwedo.whatwedo');
