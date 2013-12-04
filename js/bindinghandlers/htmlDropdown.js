/// <reference path="../plugins/knockout-3.0.0.js" />
/* global define */

define(['knockout', 'jquery'], function(ko, $) {
    ko.bindingHandlers.htmlDropdown = {
        init: function (element, valueAccessor) {
            var value = valueAccessor(),
                $element = $(element);

            // Add attribute placeholder to element
            if (/input/gi.test(element.tagName)) {
                ko.applyBindingsToNode(element, { attr: { placeholder: value.placeHolder } });
            }
            if (/div|p|span|/gi.test(element.tagName)) {
                ko.applyBindingsToNode(element, { html: value.placeHolder });
            }

            // handle click
            ko.applyBindingsToNode(element, {
                click: function () {
                    $(element).parent().toggleClass('isOpen');
                }
            });

            // Add ul element with list of items after element
            var list = $('<ul></ul>');
            ko.utils.arrayForEach(value.dataList, function (listItem) {
                list.append('<li>' + listItem.text + '</li>')
            });
            $element.parent().append(list);
        },
        update: function () { }
    };
});