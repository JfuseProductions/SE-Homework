package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import java.util.Scanner;


@Component
public class Employee {
	Scanner scan = new Scanner(System.in);
	
	private int emp_id = this.createId(),emp_salary;
	private String emp_name;

	@Autowired
	@Qualifier("address")
	private Address address;
	
	public int getId() {return emp_id;}
	public String getName() {return emp_name;}
	public int getSalary() {return emp_salary;}
	public Address getAddress() {return address;}
	
	
	public void setId(int emp_id) {this.emp_id = emp_id;}
	public void setName(String emp_name) {this.emp_name = emp_name;}
	public void setSalary(int emp_salary) {this.emp_salary= emp_salary;}
	public void setAddress(Address address) {this.address = address;}
	
	
	public int calc(int emp_salary) {
		float 	bonus = .12f, 
				getBonus = bonus * emp_salary,
				salary = getBonus + emp_salary;
		return (int)salary;
	}

	
	
	public int createId() {
		int min = 10000000, max = 99999999;
		emp_id = (int)Math.floor(Math.random()*(max-min+1)+min);
		return emp_id;
	}
	
	public void show() {
		System.out.println("NEW EMPLOYEE IN SYSTEM!");
		System.out.println("***********************");
		System.out.println("Id:"+ emp_id);
		System.out.println("Name:"+emp_name);
		System.out.println("Salary: $" + String.format("%.2f", (double) calc(emp_salary)));
		System.out.println("Weekly Paycheck: $" + String.format("%.2f", (double) calc(emp_salary)/52 ));
		address.address();
	}
}