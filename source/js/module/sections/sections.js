/**
 * @module:   sections
 * @scss:     ./source/css/module/sections.scss
 * @html:     ./source/js/module/sections/sections.html
 */




var $ = require('jquery');
var fullpage = require('fullpage.js');
var Module = require('../abstract-module');

module.exports = Module.extend({

  template: require('./sections.html'),

    data: require('../../data/content.json')

});


function scrollSection(){
	console.log('test');
}

window.onload = function(){
	document.getElementById("arrow").addEventListener('click', function(){
		console.log('test')
	});
}




// var arrow = document.querySelectorAll(".arrow");

// arrow.addEventListener('click', function(){
// 	console.log();
// })


