const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
      type: String, 
      renum: ['SFO', 'OAK', 'JAX', 'AUS', 'OGG'],
  },
  arrival: {
      type: Date,
  }
});

const flightSchema = new Schema({
    airline: {
      type: String,
      renum: ['Hawaiian Airlines', 'American Airlines', 'United Airlines']
    },
    airport: {
      type: String, 
      renum: ['SFO', 'OAK', 'JAX', 'AUS', 'OGG'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    destinations: {
        type: [destinationSchema],  
    },
    departs: {
        type: Date,
        default: function() {
          return new Date().setFullYear(new Date().getFullYear() + 1)
        },
  },  
  timestamps: {type: Boolean, default: true}
});
  
  module.exports = mongoose.model('Flight', flightSchema)