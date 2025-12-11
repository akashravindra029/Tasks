
//
package Task2;

import java.util.Stack;

public class Prog14 {

    Stack<Integer> s1 = new Stack<>();
    Stack<Integer> s2 = new Stack<>();

    // Enqueue (push element to queue)
    public void enqueue(int x) {
        s1.push(x);
    }

    // Dequeue (remove element from queue)
    public int dequeue() {
        if (s1.isEmpty() && s2.isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }

        // Move elements from s1 to s2 only if s2 is empty
        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        return s2.pop();
    }

    // Front element
    public int peek() {
        if (s1.isEmpty() && s2.isEmpty()) {
            System.out.println("Queue is empty");
            return -1;
        }

        if (s2.isEmpty()) {
            while (!s1.isEmpty()) {
                s2.push(s1.pop());
            }
        }

        return s2.peek();
    }

    public static void main(String[] args) {

        QueueUsingTwoStacks q = new QueueUsingTwoStacks();

        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);

        System.out.println(q.dequeue()); // 10
        System.out.println(q.peek());    // 20

        q.enqueue(40);
        System.out.println(q.dequeue()); // 20
    }
}

