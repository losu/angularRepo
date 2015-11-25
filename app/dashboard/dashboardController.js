'use strict';

angular.module('dashboardModule', [])
    .controller('dashboardController',
        function dashboardController($scope, $state, authenticationService, dashboardService) {

            $scope.test = 'test!!';

            $scope.mockData = [
                {
                    "id": 0,
                    "name": "David",
                    "Location": {
                        "country": "Poland",
                        "city": "Lodz"
                    }
                },
                {
                    "id": 1,
                    "name": "Ov",
                    "location": {
                        "country": "Poland",
                        "city": "Lodz"
                    }
                },
                {
                    "id": 2,
                    "name": "Ars",
                    "location": {
                        "country": "Poland",
                        "city": "Lodz"
                    }
                }]


            // checking if one's is logged
            //            if (!authenticationService.isLogged()) {
            //                $state.go('login');
            //            }


            $scope.editedPerson = '';
            $scope.showEdit = false;
            $scope.showAdd = true;

            $scope.showPersonDetails = false;
            $scope.showedPerson = '';


            $scope.people = null;
            dashboardService.getPeople().then(function (data) {
                $scope.people = data;
            });
            $scope.addPerson = function (newPerson) {


                dashboardService.addPerson(newPerson).then(function (data) {
                    $scope.people = data;
                });


            }

            $scope.removePerson = function (person, $index) {

                dashboardService.removePerson(person, $index);
            }

            $scope.editPerson = function (person, $index) {
                $scope.showAdd = false;
                $scope.showEdit = true;

                $scope.editedPerson = dashboardService.editPerson(person);
                $scope.editedId = $index


            }
            $scope.updatePerson = function () {
                $scope.editedPerson.put().then(function () {
                    $scope.people[$scope.editedId] = dashboardService.updatePerson($scope.editedPerson);
                });

                $scope.showAdd = true;
                $scope.showEdit = false;

            }

            $scope.cancleEdit = function (editId) {
                $scope.showAdd = true;
                $scope.showEdit = false;
            }

            $scope.showDetails = function (person) {
                $scope.showPersonDetails = true;
                $scope.showedPerson = dashboardService.show(person);
            }
            $scope.hideDetails = function () {
                $scope.showPersonDetails = false;
            }


        });