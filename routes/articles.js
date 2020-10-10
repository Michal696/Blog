const router = require('express').Router();
let Article = require('../models/article.model');

router.route('/').get(((req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(400).json('Error:' + err))
}));

router.route('/add').post(((req, res) => {
    const name = req.body.name;
    const content = req.body.content;
    const sortOrder = req.body.sortOrder;
    const date = Date.parse(req.body.date);

    const newArticle = new Article({name, content, sortOrder, date});

    newArticle.save()
        .then(() => res.json('newArticle added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}));

router.route('/:id').get(((req, res) => {
    Article.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error:' + err))
}));

router.route('/sortorder/:sortOrderId').get(((req, res) => {
    Article.find({sortOrder: req.params.sortOrderId})
        .then(article => res.json(article))
        .catch(err => res.status(400).json('Error:' + err))
}));

router.route('/:id').delete(((req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(res.json("Article was deleted."))
        .catch(err => res.status(400).json('Error:' + err))
}));

router.route('/update/:id').post(((req, res) => {
    Article.findById(req.params.id)
        .then(article => {
            article.name = req.body.name;
            article.content = req.body.description;
            article.sortOrder = req.body.sortOrder;
            article.date = Date.parse(req.body.date);
            article.save()
                .then(() => res.json('Article was updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error:' + err))
}));

module.exports = router;