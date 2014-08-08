(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('notificationController', ['Hub', 
        function (Hub) {
            var $self = this;

            $self.notifications = [];

            $self.count = function () { 
                return $self.notifications.length;
            };

            $self.read = function(index) {
                $self.notifications.splice(index, 1);
            };

            var addContactNotification = function(contact) {
                var msg = 'Novo contato criado: ' + contact.Name + ' [' + contact.Email + ']';
                $self.notifications.push(msg);
            };

            var removeContactNotification = function (contact) {
                var msg = 'Contato removido: ' + contact.Name + ' [' + contact.Email + ']';
                $self.notifications.push(msg);
            };

            var signalRClient = new Hub('employee', {
                listeners: {
                    'newContact': function(contact) {
                        addContactNotification(contact);
                        console.log('newContact called ' + contact);
                    },
                    'deleteContact': function (contact) {
                        removeContactNotification(contact);
                        console.log('deleteContact called');
                    }
                }
            });
        }
    ]);

})();