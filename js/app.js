/* global require */

require.config({
    baseUrl: '/js/',
    paths: {
        knockout: 'plugins/knockout-3.0.0'
    }
});

require([
        'knockout', 
        'models/dropdownsModel', 
        'bindinghandlers/htmlDropdown', 
        'plugins/domready!'
    ], 
    function(ko, ddModel) {
        ko.applyBindings(ddModel, document.getElementById('dropdowns'))
    }
);