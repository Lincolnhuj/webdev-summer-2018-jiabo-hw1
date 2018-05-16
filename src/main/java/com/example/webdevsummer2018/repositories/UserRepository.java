package com.example.webdevsummer2018.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.webdevsummer2018.models.User;

public interface UserRepository
		extends CrudRepository<User, Integer>{ //what objects are we storing in the database

}
