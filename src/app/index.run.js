(function() {
    'use strict';

    angular
        .module('cspDashboardApp')
        .config(routeConfig)
        .run(runBlock);


    /** @ngInject */
    function routeConfig($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }
})();
