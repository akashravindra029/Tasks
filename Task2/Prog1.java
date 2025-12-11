//1. Write a program to move all zeros to the end of an array without changing the order of non-zero elements.


package Task2;

import java.util.Arrays;
import java.util.Scanner;   
public class Prog1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();
        int[] array = new int[size];

        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }

        moveZerosToEnd(array);

        System.out.println("Array after moving zeros to the end:");
        System.out.println(Arrays.toString(array));
    }

    public static void moveZerosToEnd(int[] array) {
        int nonZeroIndex = 0;

        for (int i = 0; i < array.length; i++) {
            if (array[i] != 0) {
                array[nonZeroIndex++] = array[i];
            }
        }

        while (nonZeroIndex < array.length) {
            array[nonZeroIndex++] = 0;
        }
    }
}
