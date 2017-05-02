var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/campaigns');

var campaign_schema = new Schema({
  name : String,
  user: String,
  designs: Object
});

var Campaign = mongoose.model("Campaign",campaign_schema);

module.exports.Campaign = Campaign;
