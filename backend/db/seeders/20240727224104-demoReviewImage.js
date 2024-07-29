'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [{
      url: "../../images/drill.jpeg",
      reviewId:1
    },
    {
      url: "../../../images/drill.jpeg",
      reviewId:2
    },
    {
      url: "../../images/drill.jpeg",
      reviewId:1
    }], {});
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'ReviewImages';
    return queryInterface.bulkDelete(options, {}, {});
  }
}
