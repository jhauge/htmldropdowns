/// <reference path="../plugins/knockout-3.0.0.js" />
/* global define */

define(['knockout', 'jquery'], function(ko, $) {

    ko.bindingHandlers.htmlDropdown = {
        init: function (element, valueAccessor) {
            var value = valueAccessor(),
                $element = $(element);

            $element.addClass('dropdown');

            // Add css isOpen binding to container
            ko.applyBindingsToNode(element, { css: { isOpen: value.isOpen } });
            ko.applyBindingsToNode(element, { event: { mouseleave: function() { value.isOpen(false); } } })

            // Add input div
            var $input = $('<input type="text" />');
            var input = $input.get(0);
            ko.applyBindingsToNode(input, { attr: { placeholder: value.placeHolder } });
            ko.applyBindingsToNode(input, { value: value.selectedItem });
            ko.applyBindingsToNode(input, { click: function() { value.isOpen(!value.isOpen()) } });
            $element.append($input);

            // Add ul element with list of items after element
            var $list = $('<ul></ul>');
            ko.utils.arrayForEach(value.dataList, function (listItem) {
                li = $('<li>' + listItem.text + '</li>');
                li.on('click', function() {
                    value.isOpen(false);
                    value.selectedItem(listItem.text);
                });
                $list.append(li);
            });
            $element.append($list);
        },
        update: function () { }
    };
});