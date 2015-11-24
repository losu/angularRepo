'use strict';

angular.module('dashboardModule')
    .factory('dashboardService',
        function (Restangular) {

            var peopleEndpoint = Restangular.all('people');


            return {
                getPeople: function () {
                    return peopleEndpoint.getList(); //.$object;
                },

                addPerson: function (newPerson) {
                    return peopleEndpoint.post(newPerson).then(function () {
                        return peopleEndpoint.getList();
                    })
                },
                removePerson: function (person, $index) {
                    person.remove().then(function () {
                        people.splice($index, 1);
                    })
                },

                editPerson: function (person) {
                    return Restangular.copy(person);
                },

                updatePerson: function (editedPerson) {
                    return Restangular.copy(editedPerson);
                },

                show: function (person) {
                    return Restangular.copy(person);
                },


            }
        })