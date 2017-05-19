var mongoose = require('mongoose');

var campaignSchema = mongoose.Schema({
    user: String,
    title: String,
    description: String,
    designs: Array
});

module.exports = mongoose.model('Campaign', campaignSchema);
