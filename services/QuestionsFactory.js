questionList.factory('QuestionsFactory', function QuestionsFactory () {
	var factory = {};
	factory.questions = [];
	factory.categories = ["Pool", "Drums", "Copy-Paste", "Other1", "Other2", "Other3", "Other4"];
	factory.show = true;

	factory.addQuestion = function() {
		factory.questions.push({ 		 text: factory.questionText,
																   id: factory.questions.length +1,
															answers: [],
														 answered: "Not Answererd",
														 category: factory.questionCategory
													});
		factory.questionText = null;
	};


	return factory;

});
