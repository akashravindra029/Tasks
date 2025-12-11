// Find the first non-repeating element in an array using HashMap.

package Task2;

public class Prog9 {
    public static void main(String[] args) {
        int[] array = {4, 5, 1, 2, 0, 4};
        Integer result = firstNonRepeatingElement(array);
        if (result != null) {
            System.out.println("The first non-repeating element is: " + result);
        } else {
            System.out.println("No non-repeating element found.");
        }
    }

    public static Integer firstNonRepeatingElement(int[] array) {
        java.util.HashMap<Integer, Integer> map = new java.util.HashMap<>();

        // Count frequency of each element
        for (int num : array) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Find the first non-repeating element
        for (int num : array) {
            if (map.get(num) == 1) {
                return num;
            }
        }

        return null; // No non-repeating element found
    }

}
