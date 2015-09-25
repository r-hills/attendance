var attendanceTracker = angular.module('attendanceTracker',['ui.router']);


attendanceTracker.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});

	$stateProvider.state('teachers', {
		url: "/teachers",
		templateUrl: "partials/teachers.html",
//		controller: "TeachersCtrl"
	}); 

	$stateProvider.state('students', {
		url: "/students",
		templateUrl: "partials/students.html",
		controller: "StudentsCtrl"
	});


});
