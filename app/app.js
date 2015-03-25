
var tasteMeApp = angular.module('tasteMe', ['ngRoute','ngResource']);


  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      }).
      when('/info', {
        templateUrl: 'partials/info.html',
        controller: 'infoCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/home'
      });
  }]);