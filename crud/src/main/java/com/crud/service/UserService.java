package com.crud.service;

import java.util.List;

import com.crud.entity.User;

public interface UserService {
	
	User saveingData(User User);
	List<User> fechingAllData();
	User findById(int id);
}
