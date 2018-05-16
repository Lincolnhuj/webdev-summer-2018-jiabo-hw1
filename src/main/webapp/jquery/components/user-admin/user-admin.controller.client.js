(function(){
	jQuery(main); 

	var tbody;
	var template;
	function main(){ 
		tbody = $('tbody');
		template = $('.template');
		// fetch user from url. Get data from server rather than hard code.
		var promise = fetch('http://localhost:8080/api/user'); // here we won't get a users, but a promise
		// register for the promise call back.
		promise.then(function(response){
			return response.json(); // We have to convert raw response to json for further use.
		}).then(renderUsers);
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
