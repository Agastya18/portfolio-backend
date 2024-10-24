'use strict';

/**
 * hero-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero-project.hero-project');
