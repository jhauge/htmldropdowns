/* global define */

define(['knockout'], function(ko) {
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

    purposeDropdown = {
        placeHolder: 'Hvad er formålet med rejsen',
        dataList: [
            { value: 'vac', text: 'Ferie' },
            { value: 'wor', text: 'Arbejde/udstationering' },
            { value: 'aup', text: 'Au Pair ophold' }
        ],
        selectedItem: ko.observable(''),
        isOpen: ko.observable(false)
    };

    // return
    return {
        areaDropdown: areaDropdown,
        purposeDropdown: purposeDropdown
    };
});