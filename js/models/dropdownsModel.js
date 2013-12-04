/* global define */

define(['knockout'], function() {
    'use strict';

    // vars
    var areaDropdown;

    // setup
    areaDropdown = {
        placeHolder: 'Hvor skal du hen?',
        dataList: [
            {value: 'eur', text: 'Europe'},
            {value: 'eue', text: 'Extended Europe'},
            {value: 'smw', text: 'World excl. USA'},
            {value: 'wor', text: 'Whole world'}
        ]
    }

    // return
    return {
        areaDropdown: areaDropdown
    } 
});