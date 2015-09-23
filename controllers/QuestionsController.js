questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
	$scope.questions = QuestionsFactory.questions;
	$scope.categories = QuestionsFactory.categories;
	$scope.QuestionsFactory = QuestionsFactory;
});
