(function () {
    'use strict';

    angular.module('app').factory('bannerService', [bannerService]);


    function bannerService() {

        var service = { init: init };
        return service;

        //return {
        //    init: function(transition) {
        //        $("#banner-fc").owlCarousel({
        //            autoPlay: 3000,
        //            stopOnHover: true,
        //            navigation: true,
        //            paginationSpeed: 1000,
        //            goToFirstSpeed: 2000,
        //            singleItem: true,
        //            autoHeight: true,
        //            transitionStyle: transition
        //        });
        //    }
        //};
    };

    function init (transition) {
        $("#banner-fc").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: true,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
            transitionStyle: transition
        });
    };
}
)();