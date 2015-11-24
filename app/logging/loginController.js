'use strict';

angular.module('loginModule', [])
    .controller('loginController',
        function loginController($scope, $state, authenticationService, loginService) {

            $scope.inputCredentials = {
                username: '',
                password: ''
            };

            $scope.logIn = function (inputCredentials) {
                $state.go('dashboard');
                if (authenticationService.checkAuthentication(inputCredentials)) {
                    $state.go('dashboard');
                } else {
                    $state.go('login');
                };
            };



        })