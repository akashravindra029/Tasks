// Find the intersection of two sorted arrays.

package Task2;

public class Prog5 {
    public static void main(String[] args) {

        int[] arr1 = {1, 2, 4, 5, 6};
        int[] arr2 = {2, 4, 6, 8};

        System.out.println("Intersection:");
        findIntersection(arr1, arr2);
    }

    public static void findIntersection(int[] arr1, int[] arr2) {

        int i = 0; 
        int j = 0;

        // Since both arrays are sorted
        while (i < arr1.length && j < arr2.length) {

            if (arr1[i] == arr2[j]) {   // Elements match
                System.out.print(arr1[i] + " ");
                i++;
                j++;
            } 
            else if (arr1[i] < arr2[j]) {
                i++;                    // Move in first array
            } 
            else {
                j++;                    // Move in second array
            }
        }
    }
}

    

