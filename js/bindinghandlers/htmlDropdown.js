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
            ko.applyBindingsToNode(element, { event: { mouseleave: function () { value.isOpen(false); } } });

            // Add input div
            var $input = $('<input type="text" />');
            var input = $input.get(0);
            ko.applyBindingsToNode(input, { attr: { placeholder: value.placeHolder } });
            ko.applyBindingsToNode(input, { value: value.selectedItemText });
            ko.applyBindingsToNode(input, { click: function() { value.isOpen(!value.isOpen()); } });
            ko.applyBindingsToNode(input, { event: { keyup: function () { console.log(value); } } });
            $element.append($input);

            // Add ul element with list of items after element
            var $list = $('<ul></ul>');
            ko.utils.arrayForEach(value.dataList, function (listItem) {
                var $li = $('<li>' + listItem.text + '</li>');
                var li = $li.get(0);
                ko.applyBindingsToNode(li, { css: { active: value.selectedItemValue() === listItem.value } });
                ko.applyBindingsToNode(li, { click: function() {
                    value.select(listItem);
                    value.isOpen(false);
                    console.log(value.getSelectedValue());
                }});
                $list.append($li);
            });
            $element.append($list);
        },
        update: function () { }
    };
});