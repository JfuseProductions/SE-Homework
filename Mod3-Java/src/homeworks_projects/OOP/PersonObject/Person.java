package OOP.PersonObject;
import java.util.Scanner;

public class Person {
	
	Scanner scan = new Scanner(System.in);
	
	int count=0;
	String name = scan.nextLine();
	int age = scan.nextInt();
	char gender = scan.next().charAt(0);
	public Person() 
	{
		count++;
	}
	
	public Person(String name,int age,char gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		count++;
	}


	public void display() {
		String displayInfo = this.name + " " + this.age + " " + this.gender;
		System.out.println(count + "."+ " " + displayInfo);
	}
}
