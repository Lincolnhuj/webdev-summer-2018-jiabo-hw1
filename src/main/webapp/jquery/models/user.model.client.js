function User(username, password, firstName, lastName) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    // ...same for rest of properties…

    this.setUsername = setUsername;
    this.getUsername = getUsername;
    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    // ...same for rest of properties…

    function setUsername(username) {
        this.username = username;
    }
    function getUsername() {
        return this.username;
    }
    // ...same for rest of properties…
}
