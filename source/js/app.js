var domready = require('domready');
var fullpage = require('fullpage.js');
var jquery = require('jquery');


var app = {

  /**
   * Setup and configs
   */
  init: function() {

  },


  /**
   * Renders a Ractive instance
   */
  render: require('./view/main.js')

};


domready(function() {

  app.init();
  app.render();

});
