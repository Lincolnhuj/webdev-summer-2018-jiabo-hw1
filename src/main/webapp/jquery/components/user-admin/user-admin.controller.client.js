(function(){
	jQuery(main); // listen for doc to be loaded. main will be a call back function.
	function main(){ //main will not be called until the doc is loaded.
//		var h1 = jQuery('h1'); // grab all elements named h1 into h1 var.
//		var h1 = jQuery('h1#title'); // h1 type whose id is title. So we only modify the title.
		var h1 = jQuery('#title'); // Even without h1, this also works.
		h1.css('color', 'red'); // Make the header red
		h1.html('User Administration!'); // Change the html content from user admin to user administration!
		
		var red= $('.red'); // grab all red class
		var green = $('.green');
		var blue = $('.blue');
		
//		red.css('color', 'white');
//		red.css('background-color', 'red');
		// or you can do it this way:
//		red.css('color', 'white').css('background-color', 'red');
		// or:
		red.css('color', 'white')
			.css('background-color', 'red');
		
		var tr = $('.template');
		var tr1 = tr.clone(); // in memory Dom element
		
		var users = [
				{username: 'bob'},
				{username: 'charlie'}
		]
		
		var tbody = $('tbody');
		
		for(var i = 0; i < users.length; i++){ // generate contents from the array
			var user = users[i];
			console.log(user);
			var clone = tr.clone(); // in memory Dom element
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
