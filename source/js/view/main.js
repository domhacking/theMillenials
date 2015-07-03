var Ractive = require('ractive');
Ractive.components = require('../module');

module.exports = function() {

  return new Ractive({

    el: document.querySelector('.main'),

    template: require('./main.html'),

    data: require('../data/content.json'),

    computed: {
    },

    oninit: function() {

    },

    onrender: function() {
    }

  });

};
