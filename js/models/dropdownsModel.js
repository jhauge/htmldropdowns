/* global define */

define(['knockout'], function() {
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
        ]
    };

    purposeDropdown = {
        placeHolder: 'Hvad er formålet med rejsen',
        dataList: [
            { value: 'vac', text: 'Ferie' },
            { value: 'wor', text: 'Arbejde/udstationering' },
            { value: 'aup', text: 'Au Pair ophold' }
        ]
    };

    // return
    return {
        areaDropdown: areaDropdown,
        purposeDropdown: purposeDropdown
    };
});