const { Task } = require("../models/device.model.js");

module.exports = {
    index: (req, res) => {
        Task.find({}).sort({type : 1})
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    show: (req, res) => {
        Task.findOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    create: (req, res) => {
        Task.create(req.body)
            .then((a) => res.json({results : a}))
            .catch(
                (err) => res.json(err));
    },
    update: (req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, useFindAndModify:false
        })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    destroy: (req, res) => {
        Task.deleteOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
    
};
