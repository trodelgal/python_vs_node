'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserNodes', [{
      username: "gal12345",
      name: "gal",
      famalyName: "trudel",
      category: "student",
      passwordHash: "123456"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserNodes', null, {});
  }
};
