module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define('Skill', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        skillname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Skill.associate = (models) => {
        Skill.belongsToMany(models.User,{
            through: 'User_Skills'
        })
    };

    return Skill
};