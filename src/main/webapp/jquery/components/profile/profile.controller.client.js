(function(){
    $(init); // load when the document finishes loading

    var userService = new UserServiceClient();

    var $staticEmail; // $means this object will be retrieved from DOM by jQuery. It's a jQuery elements
    var $firstName;
    var $lastName;
    var $updateBtn;


    function init(){
        // fetch user by id
        $staticEmail = $("#staticEmail")
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        $updateBtn = $("#updateBtn")
            .click(updateUser);
        findUserById(22);
    }

    function updateUser(){
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        }

        userService
            .updateUser(22,user)
            .then(success);

    }

    function success(){
        alert("success");
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