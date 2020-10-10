const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    name: { type: String, required: true},
    content: { type: String, required: true},
    sortOrder: {type: Number, required: true},
    date: { type: Date, required: true},
},{
    timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

