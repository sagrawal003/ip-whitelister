angular.module('ipWhiteListerRouter', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('iplist', {
                url: '/iplist',
                templateUrl: 'app/components/iplist/ipList.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/components/home/home.html'
            });
    });
