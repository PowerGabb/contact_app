import sequelize from "../utils/db.js";
import { Sequelize } from "sequelize";
import Contact from "./ContactModel.js";


const Address = sequelize.define(
    "Address",
    {
        addressId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        addressType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        province: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        zipCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
    },{
        tableName: "address",
        underscored: true,
        timestamps: true
    }
);

Contact.hasMany(Address, {
    foreignKey: "contactId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

Address.belongsTo(Contact, {
    foreignKey: "contactId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

sequelize.sync();

export default Address;