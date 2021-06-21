package com.example.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import java.util.Scanner;


@Component
public class Student {
	Scanner scan = new Scanner(System.in);
	
	private int stu_id = this.createId(), totalSubjects = 3, gpa,subject1,subject2,subject3;
	private String stu_name, major;
	
	@Autowired
	@Qualifier("address")
	private Address address;

	
	public void setName(String stu_name) {this.stu_name = stu_name;}
	public void setSubject1(int subject1) { this.subject1 = subject1; }
	public void setSubject2(int subject2) { this.subject2 = subject2; }	
	public void setSubject3(int subject3) { this.subject3 = subject3; }	
	public void setMajor (String major)      { this.major = major;  }
	public void setGPA(int gpa){ this.gpa = gpa; }
	public void setId(int stu_id) {this.stu_id = stu_id;}
	public void setAddress(Address address) {this.address = address;}
	
	
	public double getSubject1() { return this.subject1; }
	public double getSubject2() { return this.subject2; }	
	public double getSubject3() { return this.subject3; }	
	public String getMajor()    { return this.major; }
	public int getGPA()  { return this.gpa; }
	public int getId() {return stu_id;}
	public String getName() {return stu_name;}
	public Address getAddress() {return address;}
	
	

	
	public int calculate(int totalSubjects) {
		int gpa = ((subject1 + subject2 + subject3)/totalSubjects);
		return gpa;
	}
	
	
	public int createId() {
		int min = 10000000, max = 99999999;
		stu_id = (int)Math.floor(Math.random()*(max-min+1)+min);
		return stu_id;
	}
	
	public void show() {
		System.out.println("Id:"+ stu_id);
		System.out.println("Name:"+stu_name);
		System.out.println("Major:" + major);
		System.out.println("GPA:" + String.format("%.2f", (double) calculate(totalSubjects)));
		address.address();
	
	}
}