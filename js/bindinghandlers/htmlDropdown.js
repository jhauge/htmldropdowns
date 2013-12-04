/* global define */

define(['knockout'], function(ko) {
    ko.bindingHandlers.htmlDropdown = {
        init: function(element, valueAccessor) {
            var value = valueAccessor();
            console.log(value);
            // Add attribute placeholder to element

            // Add ul element with list of items after element
        },
        update: function() {}
    } 
});