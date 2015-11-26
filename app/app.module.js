(function () {
    'use strcit';

    var App = angular.module('App', [
        'restangular',
        'appStates',
        'authenticationServiceModule',
        'loginModule',
        'dashboardModule',
        'dragDropModule',
        'd3ChartModule'
        ])
        .config(function (RestangularProvider) {
            var baseUrl = "http://localhost:8080/";


            RestangularProvider.setBaseUrl(baseUrl);
        });
})();