angular.module('appStates', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html',
                controller: 'dashboardController'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'logging/login.html',
                controller: 'loginController'
            })
            .state('google', {
                url: '/google',
                templateUrl: 'google/google.html',
                controller: 'googleController'
            })
            .state('dragDrop', {
                url: '/dragDrop',
                templateUrl: 'dragAndDropDirective/dragDrop.html',
                controller: 'dragDropController'
            })
            .state('d3Chart', {
                url: '/d3Chart',
                templateUrl: 'd3Chart/d3Chart.html',
                controller: 'd3ChartController'
            });
    });