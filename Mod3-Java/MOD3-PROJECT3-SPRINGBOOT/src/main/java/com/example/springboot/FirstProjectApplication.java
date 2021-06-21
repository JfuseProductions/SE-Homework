package com.example.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.Scanner;

@SpringBootApplication
public class FirstProjectApplication {
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		ConfigurableApplicationContext Context = SpringApplication.run(FirstProjectApplication.class, args);

		System.out.println("SpringBoot app running...");
		String line = "************************************************************\n";
		
		
//		Person p1 = Context.getBean(Person.class);
//		
//		System.out.println("Enter First and Last Name: ");
//		String p1Name = scan.nextLine();
//		p1.setName(p1Name);
//		
//		System.out.println("Enter " + p1Name + "'s" + " Age: ");
//		p1.setAge(scan.nextInt());
//		
//		System.out.println("Enter " +p1Name+ "'s" + " Gender: ");
//		p1.setGender(scan.next().charAt(0));
//		System.out.println("Enter Street: ");scan.nextLine();
//		p1.getAddress().setStreet(scan.nextLine());//).setStreet(scan.nextLine());
//		
//		System.out.println("Enter City: ");
//		p1.getAddress().setCity(scan.next());
//		
//		System.out.println("Enter State: ");
//		p1.getAddress().setState(scan.next());
//		
//		System.out.println("enter Zipcode");
//		p1.getAddress().setZip(scan.nextInt());
//		System.out.println(line);
//		p1.show();
		
		

		
//		
//		Employee emp1 = Context.getBean(Employee.class);
//		
//		System.out.println("Enter employee's name: ");
//		emp1.setName(scan.nextLine());
//		
//		System.out.println("Enter Employee Salary: ");
//		emp1.setSalary(scan.nextInt());
//		
//		
//		System.out.println("Enter Street: ");scan.nextLine();
//		emp1.getAddress().setStreet(scan.nextLine());//).setStreet(scan.nextLine());
//		
//		System.out.println("Enter City: ");
//		emp1.getAddress().setCity(scan.next());
//		
//		System.out.println("Enter State: ");
//		emp1.getAddress().setState(scan.next());
//		
//		System.out.println("enter Zipcode");
//		emp1.getAddress().setZip(scan.nextInt());
//		
//		System.out.println(line);
//		emp1.show();
//		
//		
		
		
		Student s1 = Context.getBean(Student.class);
		System.out.println(line);
		
		System.out.println("Enter Student Full Name: ");
		String s1Name = scan.nextLine();
		s1.setName(s1Name);
		
		System.out.println("Enter " + s1Name + "'s" + " Major" );
		s1.setMajor(scan.nextLine());
		
		System.out.println("Enter " + s1Name + "'s" + " NEXT 3 GRADES FOR THE SEMESTER:" );
		s1.setSubject1(scan.nextInt());
		s1.setSubject2(scan.nextInt());
		s1.setSubject3(scan.nextInt());
		s1.setGPA(3);
		
		System.out.println("Enter Street: ");scan.nextLine();
		s1.getAddress().setStreet(scan.nextLine());//).setStreet(scan.nextLine());
		
		System.out.println("Enter City: ");
		s1.getAddress().setCity(scan.next());
		
		System.out.println("Enter State: ");
		s1.getAddress().setState(scan.next());
		
		System.out.println("enter Zipcode");
		s1.getAddress().setZip(scan.nextInt());
		
		System.out.println(line);
		s1.show();
		
		
		scan.close();
	}
}





