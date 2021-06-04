package homeworks_projects;
import java.util.Scanner;



public class week1_Calculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int num1,num2,result;
		System.out.println("Please select an arithmetic by entering a number from 1 to 4:\n" + " 1 for Add\n 2 for subtract \n 3 to multiply \n 4 to divide \n 0 to Exit out");
		int userChoice = scan.nextInt();
		
		
		
		switch (userChoice) {
			case 0:
				System.out.println("Calculator Closed");
				exit();
				break;
			case 1:
				System.out.println("Select two numbers to perform arithmetic operation in order of selection ");
				num1 = scan.nextInt();num2 = scan.nextInt();
				int addResult = add( num1 , num2 );
				System.out.println(num1 + " + " + num2 + " = " + addResult);
				break;
			case 2:
				System.out.println("Select two numbers to perform arithmetic operation in order of selection ");
				num1 = scan.nextInt();num2 = scan.nextInt();
				result = subtract( num1 , num2 );
				System.out.println(num1 + " - " + num2 + " = " + result);
				break;
			case 3:
				System.out.println("Select two numbers to perform arithmetic operation in order of selection ");
				num1 = scan.nextInt(); num2 = scan.nextInt();
				result = multiply( num1 , num2 );
				System.out.println(num1 + " \u00D7 " + num2 + " = " + result);
				break;
			case 4:
				System.out.println("Select two numbers to perform arithmetic operation in order of selection ");
				num1 = scan.nextInt();num2 = scan.nextInt();
				result = divide( num1 , num2 );
				System.out.println(num1 + "\u00F7" + num2 + " = " + result);
				break;
			}
		scan.close();
	   }
	   public static int add( int x, int y) { return (x + y); }
	   	public static int subtract(int num1,int num2) {return (num1 - num2); }
	   	 public static int multiply(int num1,int num2) {return (num1 * num2); }
	   	  public static int divide ( int num1,int num2) {return (num1 / num2); } 
	   	  	public static void exit() {System.exit(0);}
}
