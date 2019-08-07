var app = angular.module('ipWhiteListerApp', [
    'ipWhiteListerRouter',
    'UserServiceService',
    'ipWhiteListerHomeCtrl',
    'ipWhiteListerIpListCtrl'
]);

app.controller('ipWhiteListerCtrl', function ($location) {
    'use strict';
    $location.path('/home');
});
