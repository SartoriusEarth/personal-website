'use strict';

angular.module('myApp.education', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/education', {
    templateUrl: 'views/education/education.html',
    controller: 'EducationCtrl'
  });
}])

.controller('EducationCtrl', [function() {

}]);