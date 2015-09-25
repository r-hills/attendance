attendanceTracker.factory('StudentsFactory', function QuestionsFactory() {
	var factory = {}; 
	factory.students = [ { name: "Betsy",   loggedIn: false },
						 { name: "Bob",     loggedIn: false },
						 { name: "Harriot", loggedIn: false },
						 { name: "Henry",   loggedIn: false },
						 { name: "Apple",   loggedIn: false }
					   ];
	
	return factory; 
}); 



// { Name: "", LoggedIn: false },