(function() {
    'use strict';

    var app = angular.module('app');

    app.config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/contacts', { templateUrl: 'app/contacts/listContacts.html' })
                .when('/contacts/new', { templateUrl: 'app/contacts/newContact.html' })
                .otherwise({ redirectTo: '/contacts' });
        }
    ]);
})();

