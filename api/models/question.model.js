module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.ENUM,
            values: ['general', 'exercise','food', 'supplements'],
            allowNull: false,
            defaultValue: 'general'
        }
    });

    return Question;
};