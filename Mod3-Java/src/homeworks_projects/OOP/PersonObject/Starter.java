package OOP.PersonObject;
import java.util.Scanner;

public class Starter {
	public static void main(String[] args) {
		
		
		Scanner scan = new Scanner(System.in);
		
		
		
		String line = "************************************************************\n";
		String personDetails = "Enter a person with following details:\n 1.Name\n 2.Age\n 3.Gender\n ";
		
		
		
//		System.out.println(line + personDetails);
//		Person p1 = new Person();  
//		p1.display();
		
		
		
		
		System.out.println(line + personDetails);
		Person1 p2 = new Person1();
		
		String p2_name =scan.nextLine();
		int p2_age = scan.nextInt();
		char p2_gender = scan.next().charAt(0);
		
		p2.setName(p2_name);
		p2.setAge(p2_age);
		p2.setGender(p2_gender);
		p2.display();
		
		
		
		
		
		String emp_request = "Enter following details for employee: Name, Age, Gender and Salary";
		
		
		System.out.println(line + emp_request);
		Employee emp1 = new Employee();
		emp1.display();
		
		
		System.out.println(line + emp_request);
		Employee emp2 = new Employee();
		emp2.display();
		
		
		
		
		
		String stu_request = "Enter following details for Student of Per Scholas: Name, Age, Gender, Study Focus and 3 seperate scores ";
		
		System.out.println(line + stu_request);
		Student s1 = new Student();
		s1.display();
		
		scan.close();
	}
	
}


