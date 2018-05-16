package com.example.webdevsummer2018.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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
	
}
