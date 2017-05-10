(function () {
    'use strict';

    angular
        .module('cspDashboardApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {
        $scope.rowCollection = [
            {sitName: 'SIT 1', overallStatus: ['G', 'Y']},
            {sitName: 'SIT 2', overallStatus: ['R', 'Y']},
            {sitName: 'SIT 3', overallStatus: ['G', 'R']}
        ];
    }
})();
