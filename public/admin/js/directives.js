angular.element(document).ready(function() {

    /**
     * app module
     */

    var app = angular.module('webapp');

    // ng-repeat finished 指令
    app.directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit(attr.onFinishRender);
                    });
                }
            }
        }
    });
    // 排序指令
    app.directive('sortOrderDirective', function (jQuery) {
        return {
            restrict: 'A',
            replace : true,
            scope: {
                title:'@',
                sortParams:'=',
                getData:'&getFunc',
            },
            template: '<th class="sort-th {{ classStr }}" ng-click="sortOrder()"><a href="javascript:void(0)">{{ title }}</a></th>',
            link: function (scope, element, attr) {
                scope.sortType = '';
                scope.classStr = 'sorting';
                scope.sortOrder = function(){
                    jQuery('.dataTable>thead>tr>.sort-th')
                        .removeClass('sorting_desc')
                        .removeClass('sorting_asc')
                        .addClass('sorting');
                    if (scope.sortType == 'ASC') {
                        scope.sortType = 'DESC';
                        scope.classStr = 'sorting_desc';
                    } else {
                        scope.sortType = 'ASC';
                        scope.classStr = 'sorting_asc';
                    }
                    scope.sortParams = {sortType : scope.sortType, sortColumn: attr.sortColumn};
                    scope.getData({sortParams: scope.sortParams});
                }
            }
        }
    });
    //缩略图展示
    app.directive('ngThumb', ['$window', function($window) {
        var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'A',
            template: '<canvas/>',
            link: function(scope, element, attributes) {
                if (!helper.support) return;

                var params = scope.$eval(attributes.ngThumb);

                if (!helper.isFile(params.file)) return;
                if (!helper.isImage(params.file)) return;

                var canvas = element.find('canvas');
                var reader = new FileReader();

                reader.onload = onLoadFile;
                reader.readAsDataURL(params.file);

                function onLoadFile(event) {
                    var img = new Image();
                    img.onload = onLoadImage;
                    img.src = event.target.result;
                }

                function onLoadImage() {
                    var width = params.width || this.width / this.height * params.height;
                    var height = params.height || this.height / this.width * params.width;
                    canvas.attr({ width: width, height: height });
                    canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                }
            }
        };
    }]);
});
