(function(){
	jQuery(main); 

	var tbody;
	var template;
	var userService = new UserServiceClient();
	
	function main(){ 
		tbody = $('tbody');
		template = $('.template');
		$('#createUser').click(createUser); // click event handler. When it is clicked, the callback will be called
		
		// fetch user from url. Get data from server rather than hard code.
		// default, fetch generates a get.
		var promise = fetch('http://localhost:8080/api/user'); // here we won't get a users, but a promise
		// register for the promise call back.
		promise.then(function(response){
			return response.json(); // We have to convert raw response to json for further use.
		}).then(renderUsers);
	}
	
	function createUser(){
		console.log('createUser');
		var username = $('#usernameFld').val(); // grab the value
		var password = $('#passwordFld').val();
		var firstName = $('#firstNameFld').val();
		var lastName = $('#lastNameFld').val();
		
		// a user object that we can send over http request
		var user={
				username: username,
				password: password,
				firstName: firstName,
				lastName: lastName
		};
		
		
		userService.createUser(user);
		

	}
	
	function renderUsers(users){
		for(var i = 0; i < users.length; i++){ // generate contents from the array
			var user = users[i];
			var clone = template.clone(); // in memory Dom element
			clone.find('.username')
				.html(user.username);
			tbody.append(clone); //  append rows after the table.
		}

	}
})();












// IIFE immediately invoked function expression
//(function () {
//	alert('hello world!');
//})(); // anonymous function
