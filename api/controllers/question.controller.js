const db = require("../models");
const Sequelize = require("sequelize");
const { sequelize } = require("../models");
const Question = db.questions;
const Comment = db.comments;

// Create and Save a new Question
exports.createQuestion = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Question
    const question = {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    };

    // Save Question in the database
    Question.create(question)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Question."
            });
        });
};


// Create and save new comments
exports.createComment = (req, res) => {

    // Todo:  add validation here.

    const comment = {
        questionId: req.params.id,
        text: req.body.text
    }

    Comment.create(comment)
        .then((data) => {
            res.send(data);
            console.log(">> Created comment:  " + JSON.stringify(data, null, 4));
        })
        .catch((err) => {
            console.log(">> Error while creating comment: ", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Comment."
            });
        });
};


// Get the comments for a given question
exports.findCommentsByQuestionId = (req, res) => {
    const questionId = req.params.id;

    return Question.findByPk(questionId, { include: ["comments"] })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(">> Error while finding question: ", err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching Comments."
            });
        });
};


// Retrieve all Questions from the database - inner query returns 
//  the # of comments for each question.
//  https://sequelize.org/master/manual/sub-queries.html
exports.findAll = (req, res) => {
    const category = req.query.category;
    var condition = category ? { category: `${category}` } : null;
 
    Question.findAll({
        where: condition,
        attributes: {
            include: [
                [
                    Sequelize.literal(
                        '(SELECT count(*) FROM comments WHERE question.id = comments.questionId)'
                    ),
                    'commentCount'
                ]
            ]
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving questions."
            });
        });
};


// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Question.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Question with id=" + id
            });
        });
};


// Update a Question by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Question.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Question was updated successfully."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "error updating Question with id=" + id
            });
        });
};


// Delete a Question with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Question.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Question with id=${id}.  Maybe Question was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Question with id=" + id
            });
        });
};


// Delete all Questions from the database.
exports.deleteAll = (req, res) => {
    Question.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Questions were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all tutorials."
            });
        });
};


