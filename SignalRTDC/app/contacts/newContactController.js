(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('newContactController', ['$scope', '$location', '$resource',
        function ($scope, $location, $resource) {

            var Contact = $resource('/api/contacts');

            $scope.save = function () {
                $scope.$broadcast('show-errors-check-validity');

                if ($scope.userForm.$valid) {

                    Contact.save($scope.contact, function() {
                        $location.path('#!/contacts');
                    });
                }
            };

            $scope.reset = function () {
                $scope.$broadcast('show-errors-reset');
                $scope.contact = { name: '', email: '' };
            }
        }
    ]);

})();

