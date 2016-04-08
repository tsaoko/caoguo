'use strict';

angular.module('caoguoApp.lab', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/lab', {
		templateUrl: 'lab/lab.html',
		controller: 'LabCtrl'
	});
}])

.controller('LabCtrl', [function() {

}]);