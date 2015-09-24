var questionList = angular.module('questionList', ['ui.router']);

questionList.config(function($stateProvider, $urlRouterProvider) {

	// $stateProvider.state('home', {
	// 	url: "",
	// 	templateUrl: "partials/home.html"
	// });

	$stateProvider.state('home', {
		url: "",
		templateUrl: "partials/home.html"
	});

	$stateProvider.state('questions', {
		url:"/questions",
		templateUrl: "partials/questions.html",
		controller: "QuestionsCtrl"
	});

	$stateProvider.state('search', {
		url:"/search-results",
		templateUrl: "partials/search.html",
		controller: "QuestionsCtrl"
	});


	$stateProvider.state('questions.answers', {
		url: "/:questionId",
		templateUrl: "partials/questions.answers.html",
		controller: "AnswersCtrl"
	});


});
