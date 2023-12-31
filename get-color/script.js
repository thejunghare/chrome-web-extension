// Generated by CoffeeScript 2.7.0
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    var addTooltip, getId, getProperties, getfont;
    getProperties = ['color', 'background-color'];
    getfont = function(element, properties) {
      var computedStyle, computedValues, i, len, property, tooltipContent;
      computedStyle = window.getComputedStyle(element, null);
      computedValues = {};
      for (i = 0, len = properties.length; i < len; i++) {
        property = properties[i];
        computedValues[property] = computedStyle.getPropertyValue(property);
      }
      tooltipContent = `<div>
    <p>Color: ${computedValues["color"]}</p>
    <p>Background: ${computedValues["background-color"]}</p>
</div>`;
      return tooltipContent;
    };
    getId = function(obj) {
      return obj.id;
    };
    addTooltip = function(element) {
      var tooltipInstance;
      $(element).attr('data-bs-toggle', 'tooltip').attr('data-bs-placement', 'bottom').attr('data-bs-html', 'true').attr('title', '');
      tooltipInstance = new bootstrap.Tooltip(element, {
        title: getfont(element, getProperties)
      });
      tooltipInstance.show();
      console.log('Tooltip added');
      return $(element).on('mouseleave', function(event) {
        var tooltip;
        element = event.target;
        tooltip = bootstrap.Tooltip.getInstance(element);
        if (tooltip) {
          tooltip.dispose();
          return console.log('Tooltip removed');
        }
      });
    };
    addEventListener('mouseover', function(event) {
      return console.log(getId(event.target));
    });
    return addEventListener('mouseover', function(event) {
      var element, id;
      element = event.target;
      id = getId(element);
      if (id) {
        return addTooltip(element);
      }
    });
  });

}).call(this);
