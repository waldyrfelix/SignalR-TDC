(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('notificationController', ['Hub', 
        function (Hub) {
            var $self = this;

            $self.notifications = [];
            $self.count = function () { return $self.notifications.length; };

            var addNotification = function(contact) {
                var msg = 'Novo contato criado: ' + contact.name + ' <' + contact.email + '>';
                $self.notifications.push(msg);
            };

            var signalRClient = new Hub('employee', {
                listeners: {
                    'newContact': function(contact) {
                        addNotification(contact);

                        console.log('newContact called ' + contact);
                    },
                    'deleteContact': function(id) {
                        console.log('deleteContact called');
                    }
                }
            });


        }
    ]);

})();