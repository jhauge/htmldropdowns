/* global define */

define(['knockout', 'models/dropdownDataModel'], function(ko, DropdownDataModel) {
    'use strict';

    // vars
    var areaDropdown,
        purposeDropdown;

    // setup
    areaDropdown = {
        placeHolder: 'Hvor skal du hen?',
        dataList: [
            { value: 'eur', text: 'Europe' },
            { value: 'eue', text: 'Extended Europe' },
            { value: 'smw', text: 'World excl. USA' },
            { value: 'wor', text: 'Whole world' }
        ],
        selectedItem: ko.observable(''),
        isOpen: ko.observable(false)
    };

    purposeDropdown = new DropdownDataModel({
        placeHolder: 'Hvad er formålet med rejsen',
        dataList: [
            { value: 'vac', text: 'Ferie' },
            { value: 'wor', text: 'Arbejde/udstationering' },
            { value: 'aup', text: 'Au Pair ophold' }
        ]
    });

    // return
    return {
        areaDropdown: areaDropdown,
        purposeDropdown: purposeDropdown
    };
});