angular.module('ipWhiteListerIpListCtrl', []).controller('ipListCtrl', function ($scope, userService) {
    'use strict';
    $scope.ipAddressPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i;
    $scope.isDisableButtons = false;
    $scope.isShowAddButton = true;
    $scope.formSaved = false;
    $scope.user = userService.get();
    $scope.ipAddresses = getIPList();

    /**
     * Add new input box to the form on clicking '+' icon for user to provide IP Address.
     @return {undefined} Returns nothing
     */
    $scope.addRow = function () {
        if ($scope.ipAddresses.length < $scope.user.allowedIpAddress) {
            $scope.ipAddresses.push({value: ''});
            $scope.isShowAddButton = true;
        }

        // Do not show Add button if user's maximum limit for IP Address reached.
        $scope.isShowAddButton = !($scope.ipAddresses.length === $scope.user.allowedIpAddress);
        enableSaveButton();
    };

    /**
     * Remove the selected row from the form.
     *
     * @param {integer} index current row index.
     @return {undefined} Returns nothing
     */
    $scope.removeRow = function (index) {
        if ($scope.ipAddresses.length > 1) {
            $scope.ipAddresses.splice(index, 1);
        } else {
            $scope.ipAddresses = getDefaultIPAddress();
        }

        $scope.isShowAddButton = ($scope.ipAddresses.length < $scope.user.allowedIpAddress);
        enableSaveButton();
    };

    /**
     * Save the IP Addresses as whitelist IPs in local storage.
     *
     @return {undefined} Returns nothing
     */
    $scope.saveWhiteListIps = function () {
        // Set flags to disable/hide buttons.
        $scope.isDisableButtons = true;
        $scope.isShowAddButton = false;

        $scope.ipAddresses = $scope.ipAddresses.filter(function (data) {
            return (data.value) ? true : false;
        });

        var userData = {};
        userData.user = {type: $scope.user.type};

        if ($scope.ipAddresses.length) {
            userData.ipAddresses = $scope.ipAddresses;
        } else {
            $scope.ipAddresses = userData.ipAddresses = getDefaultIPAddress();
        }

        localStorage.setItem('whiteListIPs', JSON.stringify(userData));

        // Set flags to enable/show buttons.
        $scope.isShowAddButton = true;
        $scope.formSaved = true;
    };

    /**
     *
     @return {object} Return IP Addresses from local storage if present else default.
     */
    function getIPList() {
        var ipList = [{value: ''}];
        var whiteListIPs = JSON.parse(localStorage.getItem('whiteListIPs'));

        if (whiteListIPs) {
            ipList = whiteListIPs.ipAddresses;
        }

        return ipList;
    }

    /**
     * Set flags to show/hide save/saved buttons.
     *
     @return {undefined} Returns nothing
     */
    function enableSaveButton() {
        $scope.isDisableButtons = false;
        $scope.formSaved = false;
    }

    function getDefaultIPAddress() {
        return [{value: ''}];
    }
});
