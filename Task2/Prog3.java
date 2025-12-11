// 3. Find the second most frequent character in a string.


package Task2;

public class Prog3 {
    public static void main(String[] args) {
        String str = "programming";
        char result = secondMostFrequentChar(str);
        if (result != '\0') {
            System.out.println("The second most frequent character is: " + result);
        } else {
            System.out.println("No second most frequent character found.");
        }
    }

    public static char secondMostFrequentChar(String str) {
        int[] freq = new int[256];

        for (char c : str.toCharArray()) {
            freq[c]++;
        }

        int firstMax = 0, secondMax = 0;
        char firstChar = '\0', secondChar = '\0';

        for (int i = 0; i < freq.length; i++) {
            if (freq[i] > firstMax) {
                secondMax = firstMax;
                secondChar = firstChar;
                firstMax = freq[i];
                firstChar = (char) i;
            } else if (freq[i] > secondMax && freq[i] != firstMax) {
                secondMax = freq[i];
                secondChar = (char) i;
            }
        }

        return secondChar;
    }
    
}
