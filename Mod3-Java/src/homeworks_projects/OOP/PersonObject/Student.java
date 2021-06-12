package OOP.PersonObject;
import java.util.Scanner;
//implements PersonInterface
public class Student extends Person implements PersonInterface{
	Scanner scan = new Scanner(System.in);
	
	
	int id = this.createId();
	int totalSubjects = 3;
	int gpa; //= calculate(totalSubjects);
	
	 public String major = scan.nextLine();
	 public int subject1 = scan.nextInt();
	 public int subject2 = scan.nextInt();
	 public int subject3 = scan.nextInt();
	

	Student( int id, String name, int age, char gender, String major, int subject1, int subject2, int subject3, int gpa ) {
		super(name,age,gender);
		
		this.id = id;
		this.major = major;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		
		this.gpa = gpa;
	}
	public Student() {}
	
	public void display() {
		System.out.println(ORGANIZATION);
		System.out.println("Id: " + this.id);
		super.display();
		System.out.println("Major: " + this.major);
		System.out.println("GPA: " + String.format("%.2f",this.totalGPA));
	}
	
	public void setID (int id) { this.id = id; }
	
	public void setSubject1(int subject1) { this.subject1 = scan.nextInt(); }
	public void setSubject2(int subject2) { this.subject2 = scan.nextInt(); }	
	public void setSubject3(int subject3) { this.subject3 = scan.nextInt(); }	
	public void setMajor (String major)      { this.major = scan.nextLine(); }
	public void setGPA(int gpa){ this.gpa = gpa; }
	
	
	public int getID()   { return this.id;}
	
	public double getSubject1() { return this.subject1; }
	public double getSubject2() { return this.subject2; }	
	public double getSubject3() { return this.subject3; }	
	public String getMajor()    { return this.major; }
	public int getGPA()  { return this.gpa; }
	
	
	public int calculate(int totalSubjects) {
		int gpa = ((this.subject1 + this.subject2 + this.subject3)/totalSubjects);
		return gpa;
	}
	double totalGPA = calculate(totalSubjects);
	
	public int createId() {
		int min = 10000000, max = 99999999;
		int id = (int)Math.floor(Math.random()*(max-min+1)+min);
		return id;
	}
	

	
}
