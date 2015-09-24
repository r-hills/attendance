questionList.factory('UtilitiesFactory', function() {
	return {
		findById: function(collection, id) {
			for (var i=0; i < collection.length; i++) {
				if( collection[i].id == id ) {
					return collection[i];
				}
			}
			return null;
		},

		changeShowValue: function() {
			if(QuestionsFactory.show === true){
				QuestionsFactory.show = false;
				return QuestionsFactory.show;
			}else{
				QuestionsFactory.show = true;
				return QuestionsFactory.show;
			}
		}
	};

});
