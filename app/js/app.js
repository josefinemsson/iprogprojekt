
var tasteMeApp = angular.module('tasteMe', ['ngRoute','ngResource']);


 tasteMeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/info/:infoName/:type', {
        templateUrl: 'partials/info.html',
        controller: 'InfoCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/main'
      });
  }]);