const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets){
      res.render('flights/show', { title: 'Flight Detail', flight, tickets });
    });
  });
}

function newFlight(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    if (req.body.departs === '') req.body.departs = new Date().setFullYear(new Date().getFullYear() + 1)
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights/new');
    });
};