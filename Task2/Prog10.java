// Implement a program to group anagrams from a list of words.

package Task2;

public class Prog10 {
    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        groupAnagrams(words);
    }

    public static void groupAnagrams(String[] words) {
        java.util.HashMap<String, java.util.List<String>> map = new java.util.HashMap<>();

        for (String word : words) {
            char[] charArray = word.toCharArray();
            java.util.Arrays.sort(charArray);
            String sortedWord = new String(charArray);

            if (!map.containsKey(sortedWord)) {
                map.put(sortedWord, new java.util.ArrayList<>());
            }
            map.get(sortedWord).add(word);
        }

        for (java.util.List<String> group : map.values()) {
            System.out.println(group);
        }
    }
}
