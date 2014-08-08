(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('listContactsController', ['$modal', 'Contact', function ($modal, Contact) {
        var $self = this;

        $self.contacts = Contact.query();

        $self.alerts = {
            items: [],
            add: function (type, msg) {
                this.items.push({ type: type, msg: msg });
            },
            close: function (index) {
                this.items.splice(index, 1);
            }
        };
        
        $self.remove = function (contactItem, index) {
            var modalInstance = $modal.open({
                templateUrl: 'app/contacts/removeContactModal.html',
                controller: 'removeContactModalController',
                resolve: {
                    items: function () {
                        return { contact: contactItem, index: index };
                    }
                }
            });

            modalInstance.result.then(function (param) {
                Contact.delete({ id: param.contact.id });
                $self.contacts.splice(param.index, 1);
                $self.alerts.add('success', 'O contato ' + param.contact.name + ' foi excluído com sucesso.');
            });
        };
    }]);

})();

