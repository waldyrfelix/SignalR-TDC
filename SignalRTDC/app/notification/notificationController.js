(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('notificationController', ['$scope', 'Hub', 'toaster',
        function ($scope, Hub, toaster) {
            var $self = this;

            $self.notifications = [];

            $self.count = function () {
                return $self.notifications.length;
            };

            $self.read = function (index) {
                $self.notifications.splice(index, 1);
            };

            var signalRClient = new Hub('notification', {
                listeners: {
                    'newContact': function (msg) {
                        $self.notifications.push(msg);
                        toaster.pop('success', msg);
                        $scope.$apply();

                        console.log('newContact called ' + msg);
                    },
                    'deleteContact': function (msg) {
                        $self.notifications.push(msg);
                        toaster.pop('error', msg);
                        $scope.$apply();

                        console.log('deleteContact called. ' + msg);
                    }
                }
            });
        }
    ]);

})();