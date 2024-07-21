package com.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.entity.User;
import com.crud.service.UserServiceImpl;


@CrossOrigin("*")
@RestController
public class UserController {
	
	@Autowired
	public UserServiceImpl userService;
	
	@GetMapping("/findAll")
	public ResponseEntity<Object> findAll() {
		System.out.println("All function called");
		return ResponseEntity.status(HttpStatus.OK).body(userService.fechingAllData());	
	}
	
	@PostMapping("/save")
	public User savingData(@RequestBody User user) {
		System.out.println("Save function called");
		return userService.saveingData(user);
	}
	
	@GetMapping("/findAll/{id}")
	public ResponseEntity<Object> getByPhoneNumber(@PathVariable int id){
		System.out.println("get by id function called");
		return ResponseEntity.ok(userService.findById(id));
	}
	
	@PutMapping("/findAll/{id}")
	public User updateMyself(@RequestBody User user, @PathVariable int id) throws Exception{
		System.out.println("update function called");
		return userService.updateDetails(id, user);
	}
	
	@DeleteMapping("/findAll/{id}")
	public String deleteUser(@PathVariable int id) {
		System.out.println("delete function called");
		return userService.deleteUser(id);
	}

}
