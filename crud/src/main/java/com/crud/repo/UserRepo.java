package com.crud.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
