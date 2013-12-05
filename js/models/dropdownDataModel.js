/* global define */

define(['knockout'], function (ko) {

    var DropdownDataModel = function (data) {
        this.placeHolder = ko.observable(data.placeHolder || '');
        this.dataList = data.dataList || [];
        this.selectedItemText = ko.observable();
        this.selectedItemValue = ko.observable();
        this.isOpen = ko.observable(false);
    };

    DropdownDataModel.prototype.select = function (item) {
        this.selectedItemText(item.text);
        this.selectedItemValue(item.value);
    };

    // return 
    return DropdownDataModel;
});