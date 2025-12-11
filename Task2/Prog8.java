// Check if two strings are anagrams without sorting (HashMap only).


package Task2;

public class Prog8 {

    public static void main(String[] args) {

        String str1 = "listen";
        String str2 = "silent";

        if (areAnagrams(str1, str2)) {
            System.out.println("Yes, they are anagrams");
        } else {
            System.out.println("No, they are not anagrams");
        }
    }

    public static boolean areAnagrams(String s1, String s2) {

        // If lengths differ, they cannot be anagrams
        if (s1.length() != s2.length()) {
            return false;
        }

        // Create frequency array for 26 lowercase letters
        int[] freq = new int[26];

        // Count frequency of each character in s1
        for (char c : s1.toCharArray()) {
            freq[c - 'a']++;
        }

        // Decrease frequency based on characters in s2
        for (char c : s2.toCharArray()) {
            freq[c - 'a']--;
        }

        // Check if all frequencies are zero
        for (int count : freq) {
            if (count != 0) {
                return false;
            }
        }

        return true;
    }


}
