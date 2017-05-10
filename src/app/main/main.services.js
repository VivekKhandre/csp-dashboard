(function () {
    'use strict';

    angular.module('cspDashboardApp')
        .factory('mainService', function ($http, appConfig) {
            var factory = {
                getClientDetails: function () {
                    return $http.get(appConfig.endPointUrl + '/api/clientDetails');
                },
                generateLicense: function (reqData) {
                    return $http.post(appConfig.endPointUrl + '/api/generateLicense', reqData);
                }
            };
            return factory;
        });
});