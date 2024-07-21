package com.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.entity.User;
import com.crud.exception.UserNotFoundException;
import com.crud.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Override
	public User saveingData(User User) {
		return userRepo.save(User);
	}

	@Override
	public List<User> fechingAllData() {
		return userRepo.findAll();
	}

	@Override
	public User findById(int id) {
		return userRepo.findById(id)
				.orElseThrow(() -> new UserNotFoundException(id));
	}
	
	public User updateDetails(int id, User user) throws Exception {
		return userRepo.findById(id)
				.map(users -> {
					users.setId(user.getId());
					users.setUserName(user.getUserName());
					users.setUserEmail(user.getUserEmail());
					users.setUserPhoneNo(user.getUserPhoneNo());
					return userRepo.save(user);
				}).orElseThrow(() -> new UserNotFoundException(id)) ;
	}
	
	public String deleteUser(int id) {
		if(!userRepo.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepo.deleteById(id);
		return "User Id: " + id + " Deleted Succesfully!";
	}

}
