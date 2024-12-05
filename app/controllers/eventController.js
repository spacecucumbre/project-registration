const Event = require('../models/EventModel');

module.exports = {
    index: (req, res) => {
        Event.find({})
            .lean()
            .then((events) => {
                res.render('eventView/events', { events: events })
            }).catch((err) => {
                res.send(err)
            })
    },
    create: (req, res) => {
        const newEvent = new Event(req.body);
        newEvent.save()
            .then(() => {
                res.redirect('/events');
            })
            .catch((err) => {
                res.send(err);
            });


    },
    delete: (req, res) => {
        Event.findByIdAndDelete(req.params.id)
            .then(() => {
                res.redirect('/events');
            })
            .catch((err) => {
                res.send(err);
            });
    },
}

