(function(){
//	jQuery(main); 
// 3 this file!
	var tbody;
	var template;
	var userService = new UserServiceClient();
	$(main);
	function main(){ 
		tbody = $('tbody');
		template = $('.wbdv-template');
		$('#createUser').click(createUser); // click event handler. When it is clicked, the callback will be called
        findAllUsers();
	}

	function findAllUsers(){
		userService
			.findAllUsers()
			.then(renderUsers);
	}
	
	function createUser(){
		var username = $('#usernameFld').val(); // grab the value
		var password = $('#passwordFld').val();
		var firstName = $('#firstNameFld').val();
		var lastName = $('#lastNameFld').val();
		
		// a admin object that we can send over http request
		var user={
				username: username,
				password: password,
				firstName: firstName,
				lastName: lastName
		};
		
		
		userService
			.createUser(user)
			.then(findAllUsers); // enable auto refresh after creating a admin
	}
	
	function renderUsers(users){
		tbody.empty(); // clear out the tbody.
		for(var i = 0; i < users.length; i++){ // generate contents from the array
			var user = users[i];
			var clone = template.clone(); // in memory Dom element
			clone.attr('id', user.id); //distinguisher. The generated html will be tagged with id.

			clone.find('.wbdv-username') // find the class in html.
				.html(user.username);
            clone.find('.password')
                .html(user.password);
            clone.find('.wbdv-first-name')
                .html(user.firstName);
            clone.find('.wbdv-last-name')
                .html(user.lastName);
            clone.find('.wbdv-role')
                .html(user.role);
			clone.find('.wbdv-remove').click(deleteUser);
            clone.find('.wbdv-edit').click(editUser);
			tbody.append(clone); //  append rows after the table.

		}
	}


	function deleteUser(event){
		var deleteBtn = $(event.currentTarget); // raw DOM to jQuery Dom. Easier to manipulate

		console.log(deleteBtn);

		var userId = deleteBtn
			.parent()
            .parent()
            .parent()
			.attr('id'); // admin id is granParentId


		userService
			.deleteUser(userId)
			.then(findAllUsers);
	}

    function editUser(event){
        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .parent()
            .attr('id'); // admin id is granParentId
        // userService.editUser(userId);
    }


})();












// IIFE immediately invoked function expression
//(function () {
//	alert('hello world!');
//})(); // anonymous function
