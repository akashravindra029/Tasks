//

package Task2;

class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Prog15 {

    // Detect cycle and return starting node
    public static Node detectCycle(Node head) {

        Node slow = head;
        Node fast = head;

        // Step 1: Detect if cycle exists
        while (fast != null && fast.next != null) {
            slow = slow.next;        // moves 1 step
            fast = fast.next.next;   // moves 2 steps

            if (slow == fast) {      // cycle detected
                return findStart(head, slow);
            }
        }

        return null; // no cycle
    }

    // Step 2: Find cycle starting point
    private static Node findStart(Node head, Node meetingPoint) {
        Node p1 = head;
        Node p2 = meetingPoint;

        while (p1 != p2) {
            p1 = p1.next;
            p2 = p2.next;
        }
        return p1; // cycle start
    }

    // Print list (safe print for demonstration)
    public static void display(Node head, int limit) {
        Node temp = head;
        int count = 0;

        while (temp != null && count < limit) {
            System.out.print(temp.data + " ");
            temp = temp.next;
            count++;
        }
        System.out.println();
    }

    public static void main(String[] args) {

        // Creating linked list with a cycle:
        // 1 → 2 → 3 → 4 → 5
        //          ↑       |
        //          |_______|
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);

        // Creating cycle: 5 → 3
        head.next.next.next.next.next = head.next.next;

        Node cycleStart = detectCycle(head);

        if (cycleStart != null) {
            System.out.println("Cycle detected at node: " + cycleStart.data);
        } else {
            System.out.println("No cycle found");
        }
    }
}
