const database = require('../database')
const Organization = require('./organization')

class Inventory {
  constructor() {
    this.model = database.db.define('inventories', {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: database.db.Sequelize.STRING,
        allowNull: false
      },
      organization_id: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: Organization,
          key: 'id'
        }
      },
    })
    this.model.belongsTo(Organization, {
      foreignKey: 'organization_id'
    })
    Organization.hasMany(this.model, {
      foreignKey: 'organization_id'
    })
  }
}

module.exports = new Inventory().model