'use strict';


var mongoose = require('mongoose'),
  Usage = mongoose.model('usage');

exports.list_all_usages = function(req, res) {
  Usage.find({}, function(err, usage) {
    if (err)
      res.send(err);
    res.json(usage);
  }).populate('vehicle').populate('user').select();
};




exports.create_a_usage = function(req, res) {
  var new_usage = new Usage(req.body);
  new_usage.save(function(err, usage) {
    if (err)
      res.send(err);
    res.json(usage);
  });
};


exports.read_a_usage = function(req, res) {
    Usage.findById(req.params.usageId, function(err, usage) {
    if (err)
      res.send(err);
    res.json(usage);
  });
};


exports.update_a_usage = function(req, res) {
    Usage.findOneAndUpdate({_id: req.params.usageId}, req.body, {new: true}, function(err, usage) {
    if (err)
      res.send(err);
    res.json(usage);
  });
};


exports.delete_a_usage = function(req, res) {
    Usage.deleteOne({
    _id: req.params.usageId
  }, function(err, usage) {
    if (err)
      res.send(err);
    res.json({ message: 'usage successfully deleted' });
  });
};
