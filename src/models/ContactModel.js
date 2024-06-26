import sequelize from "../utils/db.js";
import { Sequelize } from "sequelize";
import User from "./UserModel.js";

const Contact = sequelize.define(
    "Contact",
    {
        contactId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: true
        },
        fullName: {
            type: Sequelize.STRING,
            get() {
                return this.firstName + " " + this.lastName;
            }
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            },
            set(value) {
                this.setDataValue("email", value.toLowerCase());
            }
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: true
        },
    },{
        tableName: "contact",
        underscored: true,
        timestamps: true
    }
);

User.hasMany(Contact, {
    foreignKey: "userId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

Contact.belongsTo(User, {
    foreignKey: "userId",
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT"
});

sequelize.sync();

export default Contact;