questionList.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
	$scope.addAnswer = function() {
		$scope.question.answers.push({text: $scope.answerText, comments:["Good"]});
		$scope.answerText = null;
	};


});

// change approve status

// change upvote

// change comments

// $scope.approved: false $scope.comments: [], $scope.upvote: 0
