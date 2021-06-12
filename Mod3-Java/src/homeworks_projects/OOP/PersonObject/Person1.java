package OOP.PersonObject;
import java.util.Scanner;

public class Person1 {
	Scanner scan = new Scanner(System.in);
	
	static int count = 0;
//	private String name = scan.nextLine();
//	private int age =scan.nextInt();
//	private char gender  = scan.next().charAt(0);
	private String name;
	private int age;
	private char gender;
	
	public Person1() 
	{
		count++;
	}
	
	public Person1(String name,int age,char gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		count++;
	}
	
	public String getName() { return name; }
	public int getAge() 	{ return age; }
	public char getGender() { return gender; }

	public void setName(String name) { this.name = name; }
	public void setAge(int age) { this.age =age; }
	public void setGender(char gender) { this.gender =gender; }
	


	public void display() {
		String displayInfo = this.name + " "+this.age + " " + this.gender;
		System.out.println(count + "."+ " " + displayInfo);
		
	}

}
