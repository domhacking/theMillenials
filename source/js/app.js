var domready = require('domready');
var $ = require('jquery');


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


$(document).ready(function() {
    $(".navButton").on("click", function( e ) {
        console.log('test');

        e.preventDefault();

        $("body, html").animate({
            scrollTop: $( $(this).attr('href') ).offset().top}, 700);

    });
});