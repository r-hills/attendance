questionList.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
	$scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);

	$scope.addAnswer = function() {
		$scope.question.answers.push({	text: $scope.answerText,
																comments: ["good"],
																approved: false,
																   votes: 0
																});
		$scope.question.answered = "Answered!";
		$scope.answerText = null;
	};
	
	$scope.cutString = function(inString) {
		var shortString = inString.slice(0,20);
		console.log(shortString);
		return shortString;
	}

});

// change approve status

// change upvote

// change comments

// $scope.approved: false $scope.comments: [], $scope.upvote: 0
