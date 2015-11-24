'use strict';

angular.module('dragDropModule')
    .directive('drag', ['$document', function ($document) {

        return {
            scope: {
                dragstart: '&',
                item: '='
            },
            link:

                function (scope, element, attr) {
                attr.$set('draggable', 'true');
                var el = element[0];

                el.addEventListener('dragstart', function (e) {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('Text', el.id);
                        this.classList.add('drag');

                        return false;
                    },
                    false);

                el.addEventListener('dragend', function (e) {

                        this.classList.remove('drag');
                        return false;
                    },
                    false);
            }
        };
    }])