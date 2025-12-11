// Implement a stack with getMin() in O(1) time.

package Task2;

import java.util.Stack;

public class Prog12 {

    Stack<Integer> mainStack = new Stack<>();
    Stack<Integer> minStack = new Stack<>();

    // Push element
    public void push(int x) {
        mainStack.push(x);

        // If minStack is empty OR new element is smaller → push it to minStack
        if (minStack.isEmpty() || x <= minStack.peek()) {
            minStack.push(x);
        }
    }

    // Pop element
    public int pop() {
        int removed = mainStack.pop();

        // If removed element equals minStack top → pop from minStack also
        if (removed == minStack.peek()) {
            minStack.pop();
        }
        return removed;
    }

    // Get minimum in O(1)
    public int getMin() {
        return minStack.peek();
    }

    // Peek top element
    public int peek() {
        return mainStack.peek();
    }

    public static void main(String[] args) {

        Prog12 s = new Prog12();

        s.push(5);
        s.push(3);
        s.push(7);
        s.push(2);

        System.out.println("Minimum: " + s.getMin()); // 2

        s.pop();
        System.out.println("Minimum: " + s.getMin()); // 3

        s.pop();
        System.out.println("Minimum: " + s.getMin()); // 3
    }
}
