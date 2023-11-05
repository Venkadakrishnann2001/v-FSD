'use strict';

/**
 * bad-bank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bad-bank.bad-bank');
