const database = require('../database')
const inventory = require('./inventory')
const Product = require('./products')
const User = require('./user')

class inventoryMovement {
  constructor() {
    this.model = database.db.define('inventoryMovements', {
      id: {
        type: database.db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: {
        type: database.db.Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: database.db.Sequelize.INTEGER,
        allowNull: false
      },
      userId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      productId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
      },
      inventoryId: {
        type: database.db.Sequelize.INTEGER,
        references: {
          model: inventory,
          key: 'id'
        }
      },
    })
    this.model.belongsTo(User, {
      foreignKey: 'userId'
    })
    this.model.belongsTo(Product, {
      foreignKey: 'productId'
    })
    this.model.belongsTo(inventory, {
      foreignKey: 'inventoryId'
    })
    User.hasMany(this.model, {
      foreignKey: 'userId'
    })
    Product.hasMany(this.model, {
      foreignKey: 'productId'
    })
    inventory.hasMany(this.model, {
      foreignKey: 'inventoryId'
    })
  }
}


module.exports = new inventoryMovement().model
