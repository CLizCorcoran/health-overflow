module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        }
    });

    return Question;
};