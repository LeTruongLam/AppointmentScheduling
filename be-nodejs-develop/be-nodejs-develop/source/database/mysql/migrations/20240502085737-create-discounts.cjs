
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('discounts', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true
      },
      type: {
        type: Sequelize.TINYINT
      },
      value: {
        type: Sequelize.DOUBLE
      },
      expiry: {
        type: Sequelize.DATE
      },
      provider_id: {
        type: Sequelize.BIGINT
      },
      code: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('discounts');
  }
};