(function(){
	jQuery(main); 
// 3 this file!
	var tbody;
	var template;
	var userService = new UserServiceClient();
	
	function main(){ 
		tbody = $('tbody');
		template = $('.template');
		$('#createUser').click(createUser); // click event handler. When it is clicked, the callback will be called
        findAllUsers();
	}

	function findAllUsers(){
		userService
			.findAllUsers()
			.then(renderUsers);
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
		
		
		userService
			.createUser(user)
			.then(rerenderAfterCreation(user)); // enable auto refresh after creating a user
		

	}
	
	function renderUsers(users){
		for(var i = 0; i < users.length; i++){ // generate contents from the array
			var user = users[i];
			var clone = template.clone(); // in memory Dom element
			clone.find('.username') // find the class in html.
				.html(user.username);
            clone.find('.password')
                .html(user.password);
            clone.find('.firstName')
                .html(user.firstName);
            clone.find('.lastName')
                .html(user.lastName);
			tbody.append(clone); //  append rows after the table.
		}

	}

    function rerenderAfterCreation(user){
            var clone = template.clone(); // in memory Dom element
            clone.find('.username') // find the class in html.
                .html(user.username);
            clone.find('.password')
                .html(user.password);
            clone.find('.firstName')
                .html(user.firstName);
            clone.find('.lastName')
                .html(user.lastName);
            tbody.append(clone); //  append rows after the table.
    }
})();












// IIFE immediately invoked function expression
//(function () {
//	alert('hello world!');
//})(); // anonymous function
