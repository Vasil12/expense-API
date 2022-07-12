module.exports = (sequelize, Sequelize) => {
    const expense = sequelize.define("expenses",
      { 
        shop: {
          type: Sequelize.STRING
        },
        cost: {
          type: Sequelize.INTEGER
        }
      }
    )
    return expense;
  }