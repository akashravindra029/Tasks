// Given a string, check if it is rotation of another string (e.g., "ABCD" & "CDAB").

package Task2;



    
public class Prog2 {
    public static void main(String[] args) {

        String s1 = "ABCD";
        String s2 = "CADB";

        if (isRotation(s1, s2)) {
            System.out.println("Yes, it is a rotation");
        } else {
            System.out.println("No, it is not a rotation");
        }
    }

    public static boolean isRotation(String s1, String s2) {

        // Condition 1: lengths must match
        if (s1.length() != s2.length()) {
            return false;
        }

        // Condition 2: Check if s2 exists inside s1+s1
        String temp = s1 + s1;

        return temp.contains(s2);
    }
}
