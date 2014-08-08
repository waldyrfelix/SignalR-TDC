(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('newContactController', ['$scope', '$location', 'Contact',
        function ($scope, $location, Contact) {

            $scope.save = function () {
                $scope.$broadcast('show-errors-check-validity');

                if ($scope.userForm.$valid) {

                    Contact.save($scope.contact, function() {
                        $location.path('#!/contacts');
                    });
                }
            };
        }
    ]);

})();

