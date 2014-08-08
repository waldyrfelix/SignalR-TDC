(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('removeContactModalController', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
        $scope.contact = items.contact;

        $scope.confirm = function () {
            $modalInstance.close(items);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
})();

