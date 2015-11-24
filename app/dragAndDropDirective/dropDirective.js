'use strict';

angular.module('dragDropModule')
    .directive('drop', ['$document', function ($document) {

        return {
            scope: {},
            link: function (scope, element, attr) {

                //  attr.$set('draggable', 'true');
                var el = element[0];
                var tr = null;

                el.addEventListener('dragover', function (e) {

                        e.dataTransfer.dropEffect = 'move';
                        if (e.preventDefault) {
                            e.preventDefault();
                        }


                        if (e.target.parentNode.parentNode == el) {
                            tr = e.target.parentNode;

                        }

                        this.classList.add('over');
                        return false;
                    },
                    false);

                el.addEventListener('dragenter', function (e) {
                        this.classList.add('over');

                        return false;
                    },
                    false);

                el.addEventListener('dragleave', function (e) {

                        this.classList.remove('over');

                        return false;
                    },
                    false);

                el.addEventListener('drop', function (e) {
                        if (e.stopPropagation) {
                            e.stopPropagation();
                        }

                        this.classList.remove('over');
                        var item = document.getElementById(e.dataTransfer.getData('Text'));

                        el.appendChild(item);
                        // angular.element(tr).after(item);

                    },
                    false);

            }
        };
    }])