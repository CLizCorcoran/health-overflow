const passport = require("passport");

module.exports = app => {
    const questions = require("../controllers/question.controller");
    
    
    var router = require("express").Router();

    // Create a new Question
    router.post('/', 
                passport.authenticate('jwt', { session: false}),
                questions.createQuestion
                );

    // Retrieve all Questions
    router.get("/", questions.findAll);

   // Create a new Comment from a Question with id.
   router.post("/:id/comments", 
                passport.authenticate('jwt', { session: false}),
                questions.createComment);


   // Retrieves all Comments from a single Question with id.
   router.get("/:id/comments", questions.findCommentsByQuestionId);


    // Retrieve a single Question with id
    //router.get("/:id", questions.findOne);

 
    // Update a Question with id
    //router.put("/:id", questions.update);

    // Delete a Question with id
    //router.delete("/:id", questions.delete);

    // Delete all Questions
    //router.delete("/", questions.deleteAll);

    app.use("/api/questions", router);
}