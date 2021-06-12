package OOP.PersonObject;
import java.util.Scanner;

public class Employee extends Person implements PersonInterface {
	
	Scanner scan = new Scanner(System.in);
	
	int id = this.createId();
	int emp_salary = scan.nextInt();
	static int count = 0;
	
	Employee(int id, String name, int age, char gender, int salary){
		super(name, age, gender);
		
		this.id = id;
		this.emp_salary = salary;
	}
	public Employee(){
		count++;
	}
	public void display() {
		System.out.println(ORGANIZATION);
		System.out.println("Id: " + this.id);
		super.display();
		System.out.println("Salary: $" + String.format("%.2f", calc));
		System.out.println("Weekly Paycheck: $" + String.format("%.2f",calc/52 ));
		
	}
	
	public void setSalary(int emp_salary) {this.emp_salary = scan.nextInt();}
	public int getSalary() {return this.emp_salary;}
	
	
	// BASED OFF OF INPUT OF SALARY CALCULATE THEIR BONUS
	public int calculate(int emp_salary) {
		
		float 	bonus = .12f, 
				getBonus = bonus * this.emp_salary,
				salary = getBonus + this.emp_salary;
		int gross_salary = (int)salary;
		return gross_salary;
	}
	double calc = calculate(emp_salary);
	
	
	public int createId() {
		int min = 10000000, max = 99999999;
		id = (int)Math.floor(Math.random()*(max-min+1)+min);
		return id;
	}

}
