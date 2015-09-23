questionList.factory('QuestionsFactory', function QuestionsFactory () {
	var factory = {};
	factory.questions = [];
	factory.categories = ["stuff", "more stuff", "even more stuff"];


	factory.addQuestion = function() {
		factory.questions.push({ text: factory.questionText, id:factory.questions.length +1, answers: [], category: factory.questionCategory});
		factory.questionText = null;
	};
	return factory;

});
