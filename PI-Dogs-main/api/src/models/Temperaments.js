const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Temperament = sequelize.define("temperament", {
        id: {
                    type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type:DataTypes.STRING,
            allowNull: false
        }
    })    // return Temperament
}