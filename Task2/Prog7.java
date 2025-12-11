// Given an array, find two numbers with the smallest absolute difference.

package Task2;

public class Prog7 {
    public static void main(String[] args) {
        int[] arr = {4, 9, 1, 32, 13, 5, 7};
        findSmallestDifference(arr);
    }

    public static void findSmallestDifference(int[] arr) {
        if (arr.length < 2) {
            System.out.println("Array must contain at least two elements.");
            return;
        }

        // Sort the array
        java.util.Arrays.sort(arr);

        int minDiff = Integer.MAX_VALUE;
        int num1 = -1, num2 = -1;

        // Find the smallest difference
        for (int i = 0; i < arr.length - 1; i++) {
            int diff = arr[i + 1] - arr[i];
            if (diff < minDiff) {
                minDiff = diff;
                num1 = arr[i];
                num2 = arr[i + 1];
            }
        }

        System.out.println("The two numbers with the smallest absolute difference are: " + num1 + " and " + num2);
        System.out.println("The smallest absolute difference is: " + minDiff);
    }

}
