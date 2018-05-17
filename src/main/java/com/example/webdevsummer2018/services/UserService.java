package com.example.webdevsummer2018.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer2018.models.User;
import com.example.webdevsummer2018.repositories.UserRepository;

//mapped to some URL
@RestController 
public class UserService {
// retrieve all the users
	@Autowired // instead of us instantiating repo, we ask a framework to inject it into that variable
	UserRepository repository;
	
	@DeleteMapping("/api/user/{userId}") //--->|
	public void deleteUser(@PathVariable("userId") int id) { // parse the userId to an int
		repository.deleteById(id);
	}
	
	// enable post
	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return repository.save(user); // generate a insert into db. Return the user instance
	}
	
	
	// exe this function when I ask for all users. Enable get
	@GetMapping("/api/user")  // this is mapped to a get request
	public List<User> findAllUsers(){
		return (List<User>) repository.findAll(); // select * to user
	}
	
	@GetMapping("/api/user/{userId}")  // this is mapped to a get request
	public User findUserById(@PathVariable("userId") int userId){ // parse the userId to an int
		Optional<User> data = repository.findById(userId); // findById could return null, so we should declare it as Optional from util
		if(data.isPresent()) {
			return data.get(); //If a value is present in this Optional, returns the value, otherwise throws NoSuchElementException.
		} // is this object not null (present)?
		return null;
	}
	
	
}
