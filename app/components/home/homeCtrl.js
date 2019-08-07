angular.module('ipWhiteListerHomeCtrl', []).controller('homeCtrl', function ($scope, $location, userService) {
    'use strict';

    var DEFAULT_PLAN = 'basic';
    $scope.userPlans = {
        'basic': {type: 'basic', typeText: 'Basic', allowedIpAddress: 5},
        'premium': {type: 'premium', typeText: 'Premium', allowedIpAddress: 10}
    };

    $scope.userSubscriptionPlan = getUserPlan(DEFAULT_PLAN);

    /**
     * Set user subscription plan and store in a shared service to be used later.
     *
     @return {undefined} Returns nothing
     */
    $scope.setUserAccount = function () {
        userService.set($scope.userPlans[$scope.userSubscriptionPlan]);
        $location.path('/iplist');
    };

    /**
     * get user subscription plan from local storage if present else get
     * basic plan as default.
     *
     @return {string} returns plan name
     */
    function getUserPlan(defaultPlan) {
        var subscriptionPlan = defaultPlan;
        var whiteListIPs = JSON.parse(localStorage.getItem('whiteListIPs'));

        if (whiteListIPs && whiteListIPs.user) {
            subscriptionPlan = whiteListIPs.user.type;
        }

        return subscriptionPlan;
    }
});
