/**
 * Chartist.js plugin to highlight some bars in a bar chart based on value limit.
 *
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  var defaultOptions = {
    limit: null,
    highlightBarClass: 'ct-bar-highlight'
  };

  Chartist.plugins = Chartist.plugins || {};
  Chartist.plugins.ctBarHighlight = function(options) {

    options = Chartist.extend({}, defaultOptions, options);

    return function ctBarHighlight(chart) {
      if(chart instanceof Chartist.Bar) {
        chart.on('draw', function(data) {
          if(data.type === 'bar') {
        	  // Add highlight class if the value is equal or over the limit
        	  if (options.limit !== null && data.value >= options.limit)
    		  {
        		  var element = data.element._node;
        		  element.setAttribute('class', element.getAttribute('class') + ' ' + options.highlightBarClass);
    		  }
          }    
        });
      }
    };
  };

}(window, document, Chartist)); 