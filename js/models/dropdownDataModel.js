/* global define */

define(['knockout'], function (ko) {

    var DropdownDataModel = function (data) {
        this.placeHolder = data.placeHolder || '';
        this.dataList = data.dataList || [];
        this.selectedItem = ko.observable();
        this.isOpen = ko.observable(false);
    };

    DropdownDataModel.prototype.select = function (item) {
        this.selectedItem(item);
    };

    DropdownDataModel.prototype.getSelectedText = function () {
        return this.selectedItem().text || '';
    };

    // return 
    return DropdownDataModel;
});