'use strict';

angular.module('authenticationServiceModule', [])
    .factory('authenticationService',
        function () {

            var isLogged = false;
            var credentials = {
                username: "admin@admin",
                password: "admin"
            }

            var checkAuthentication = function (inputCredentials) {
                if (credentials.username === inputCredentials.username && credentials.password === inputCredentials.password) {

                    isLogged = true;

                } else {
                    isLogged = false;

                }
                return isLogged;

            }

            return {
                checkAuthentication: checkAuthentication,
                isLogged: function () {
                    return isLogged;
                }


            }

        })