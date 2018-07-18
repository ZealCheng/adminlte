angular.element(document).ready(function() {

    /**
     * app module
     */

    var copy = angular.copy;
    var globalVar = {};
    var app = angular.module('webapp');

    // 引入jQuery
    app.factory('jQuery', [
        '$window',
        function ($window) {
            return $window.jQuery;
        }
    ]);

    // 引入地域信息
    app.factory('Regions',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {region_type: 1} : params;
                    var path = 'api/nbadmin/regions';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 供应商列表
    app.factory('Providers',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {search_type: 'all'} : params;
                    var path = 'api/nbadmin/providers';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    //获取套餐产品信息
    app.factory('Products',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {search_type: 'all'} : params;
                    var path = 'api/nbadmin/package/products';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    //获取套餐信息
    app.factory('Packages',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {search_type: 'all'} : params;
                    var path = 'api/nbadmin/packages';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 获取套餐类型
    app.factory('PackageTypes',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {} : params;
                    var path = 'api/nbadmin/package/types';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 获取卡类型
    app.factory('MemberTypes',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {} : params;
                    var path = 'api/nbadmin/member/types';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 获取会员等级
    app.factory('UserRanks',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {} : params;
                    var path = 'api/nbadmin/user/ranks';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 获取代理权限列表
    app.factory('Permissions',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {} : params;
                    var path = 'api/nbadmin/user/permissions';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 获取标签列表
    app.factory('Tags',
        function ($http, md5, $httpParamSerializer) {
            var service = {
                get: function(callback, params) {
                    // 只远程调用一次
                    params = params == undefined ? {} : params;
                    var path = 'api/nbadmin/search/tags';
                    var key = path + '?' + $httpParamSerializer(params);
                    var hash = md5.createHash(key);
                    if (globalVar[hash] != undefined) {
                        var resp = angular.copy(globalVar[hash]);
                        callback(resp);
                        return true;
                    }
                    $http.get(url + key).success(function(resp){
                        globalVar[hash] = angular.copy(resp);
                        callback(resp);
                    });
                }
            };
            return service;
        }
    );
    // 定义常量
    app.constant('providerTypes', {1: '电信', 2: '移动', 3:'联通'});
    app.constant('SourceTypes', {0:'后台', 1: '卡密', 2: '微信代充店', 3:'余额', 4:'只展示', 5:'微信自营店', 6:'APP', 7:'接口调用'});
    app.constant('operateTypes', {1 : '开关机', 2 : '更换自动化规则', 3 : '基础包套餐变更', 4 : '套餐叠加', 5 : '开关GPRS', 6 : '更新流量'});
    app.constant('dateRangePickerOptions', {
        timePicker: true,
        timePicker24Hour: true,
        timePickerIncrement: 1,
        timePickerSeconds: true,
        locale: {
          format: 'YYYY-MM-DD HH:mm:ss',
          applyLabel: '确定',
          cancelLabel: '清除',
          customRangeLabel: 'Custom',
          daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
          monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          opens: 'left',
        },
    });

});
