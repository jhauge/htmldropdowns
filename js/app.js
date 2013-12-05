/* global require */

require.config({
    baseUrl: '/js/',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
        knockout: 'plugins/knockout-3.0.0'
    },
    urlArgs: 'v=1'
});

require([
        'knockout', 
        'models/dropdownsModel', 
        'bindinghandlers/htmlDropdown', 
        'plugins/domready!'
    ], 
    function(ko, ddModel) {
        ko.applyBindings(ddModel, document.getElementById('dropdowns'));
    }
);