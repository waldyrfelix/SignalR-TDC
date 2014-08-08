(function () {
    'use strict';
    
    var app = angular.module('app', [
        'ngRoute',
        'ngSanitize',
        'ngResource',
        'ngAnimate',
        'ui.bootstrap',
        'SignalR',
        'toaster'
    ]);

    //app.config(['$httpProvider', function ($httpProvider) {
    //    $httpProvider.defaults.useXDomain = true;
    //    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //}]);

    //app.run(function ($rootScope, $location, $anchorScroll) {
    //    $rootScope.$on('$routeChangeSuccess', function () {
    //        $anchorScroll();
    //    });
    //});
})();

