// Count the frequency of each word in a paragraph using HashMap.

package Task2;


import java.util.HashMap;

public class Prog6{
    public static void main(String[] args) {

        String paragraph = "hello Mohan ,  Welcome to  java Course";

        countWords(paragraph);
    }

    public static void countWords(String text) {

        HashMap<String, Integer> map = new HashMap<>();

        // Split paragraph into words
        String[] words = text.split(" ");

        // Count each word
        for (String w : words) {
            map.put(w, map.getOrDefault(w, 0) + 1);
        }

        // Print result
        for (String key : map.keySet()) {
            System.out.println(key + " : " + map.get(key));
        }
    }
}
