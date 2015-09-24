questionList.controller('QuestionsCtrl', function QuestionsCtrl($scope, QuestionsFactory) {
	$scope.questions = QuestionsFactory.questions;
	$scope.categories = QuestionsFactory.categories;
	$scope.QuestionsFactory = QuestionsFactory;
	$scope.questionCategory = QuestionsFactory.categories[0];
	
	//$scope.hide = QuestionsFactory.hideQuestionSubmit();

	//var defaultCategory = QuestionsFactory.categories[0];
});
