package com.crud.exception;

public class UserNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	

	public UserNotFoundException(int id) {
		super("Could Not found the user id: " + id);
	}

}
