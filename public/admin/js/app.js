var controllerList = {};
var ngControllerInit = function(controllerName, controller) {
    controllerList[controllerName] = controller;
};
var getTemplatePath = function(controllerName, controller) {
    controllerList[controllerName] = controller;
};

angular.element(document).ready(function() {

    /**
     * app module
     */

    var app = angular.module('webapp', [
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ui.bootstrap',
        'angular-loading-bar',
        'angularFileUpload',
        'daterangepicker',
        'angular-md5',
        'as.sortable',
        'mgcrea.ngStrap'
    ]);

    //angular.bootstrap(document, ['webapp']);

});
