'use strict';

angular.module('loginModule')
    .factory('loginService',
        function (Restangular) {


            return {
                getAccount: function () {
                    return Restangular.all('accounts').getList();
                },
                saveAccount: function (newAccount) {
                    return Restangular.all('accounts').post(newAccount).then(function () {
                        return accounts.getList();
                    })
                }
            }
        })