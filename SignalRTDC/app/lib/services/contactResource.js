(function () {
    'use strict';

    angular.module('app').factory('Contact', ['$resource',
        function ($resource) {
            return $resource('api/contacts/:guid', { guid: '@id' });
        }]);
})();