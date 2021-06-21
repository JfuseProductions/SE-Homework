package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;


//@scope(value="prototype")
@Component
public class Person {
	
	private String name;
	private char gender;
	private int age;
	
	@Autowired
	@Qualifier("address")
	private Address address;
	
	
	public Person() {
		//System.out.println("Object created...");
	}
	
	
	public String getName() {return name;}
	public int getAge() {return age;}
	public char getGender() {return gender;}
	public Address getAddress() {return address;}
	
	public void setName(String name) {this.name = name;}
	public void setAge(int age) {this.age = age;}
	public void setGender(char gender) {this.gender = gender;}
	public void setAddress(Address address) {this.address = address;}
	

	
	public void show() {
		System.out.println("NEW PERSON LOGGED INTO SYSTEM");
		System.out.println("***********************");
		System.out.println("Name:" + name);
		System.out.println("Age:" + age);
		System.out.println("Gender:" + gender);
		address.address();
	}
}