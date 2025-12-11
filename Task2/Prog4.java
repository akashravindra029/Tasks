// 4. Remove adjacent duplicate characters in a string until no duplicates remain (e.g., “abbaca” → “ca”).

package Task2;
import java.util.Stack;
public class Prog4 {
    public static void main(String[] args) {
        String str = "abbaca";
        String result = removeAdjacentDuplicates(str);
        System.out.println("String after removing adjacent duplicates: " + result);
    }

    public static String removeAdjacentDuplicates(String str) {
        Stack<Character> stack = new Stack<>();

        for (char c : str.toCharArray()) {
            if (!stack.isEmpty() && stack.peek() == c) {
                stack.pop();
            } else {
                stack.push(c);
            }
        }

        StringBuilder sb = new StringBuilder();
        for (char c : stack) {
            sb.append(c);
        }

        return sb.toString();
    }
}