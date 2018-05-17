function UserServiceClient(){
	this.createUser = createUser; // if the following is not defined, please comment them
	// out, or the browser will not run this js properly.
//	this.findAllUsers = findAllUsers;
//	this.findUserById = findUserById;
//	this.deleteUser = deleteUser;
//	this.updateUser = updateUser;
	this.url = 
		'http://localhost:8080/api/user';
	var self = this; // self refers to this instance. It will be used later.
	
	function createUser(user){
		// send it over the server for storing
		// if fetch a post, we have to explicitly say.
		console.log("14 crerating user");
		return fetch(self.url, {
			method: 'post',
			body: JSON.stringify(user),
			headers: {
				'content-type': 'application/json'
			}
		}); // return a promise
	}
	
	
}