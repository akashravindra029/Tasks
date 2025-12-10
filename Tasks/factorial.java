package Tasks;
// Write a Java program to find the factorial of a number using recursion.


import java.util.Scanner;
public class factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        long result = factorial(number);
        System.out.println("The factorial of " + number + " is " + result);
        scanner.close();
    }

    public static long factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }
}