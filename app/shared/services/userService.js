angular.module('UserServiceService', [])
    .service('userService', function () {
        'use strict';

        var savedData = {};

        this.set = function (data) {
            savedData = data;
        };

        this.get = function () {
            return savedData;
        };

    });
