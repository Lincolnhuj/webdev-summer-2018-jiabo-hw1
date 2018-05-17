(function(){
    $(init); // load when the document finishes loading

    var userService = new UserServiceClient();

    var $staticEmail; // $means this object will be retrieved from DOM by jQuery. It's a jQuery elements
    var $firstName;
    var $lastName;


    function init(){
        // fetch user by id
        $staticEmail = $("#staticEmail")
        $firstName = $("#firstName");
        $lastName = $("#lastName");

        findUserById(22);
    }

    function findUserById(userId){
        userService.findUserById(userId).then(renderUser);
    }

    function renderUser(user){ // populate data into form
        console.log(user);
        $staticEmail.val(user.username); // grab to read only input field, change it to new value
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
    }


})();