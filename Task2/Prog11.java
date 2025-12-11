// Reverse a linked list in groups of k  using Queue.

package Task2;

public class Prog11 {

    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public static Node reverseInGroups(Node head, int k) {
        java.util.Queue<Node> queue = new java.util.LinkedList<>();
        Node dummy = new Node(0);
        Node current = dummy;
        Node temp = head;

        while (temp != null) {
            int count = 0;

            // Enqueue k nodes
            while (temp != null && count < k) {
                queue.add(temp);
                temp = temp.next;
                count++;
            }

            // Dequeue and reverse the nodes
            while (!queue.isEmpty()) {
                current.next = queue.poll();
                current = current.next;
            }
        }

        current.next = null; // Terminate the list
        return dummy.next;
    }

    public static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(4);
        head.next.next.next.next = new Node(5);
        head.next.next.next.next.next = new Node(6);
        head.next.next.next.next.next.next = new Node(7);
        head.next.next.next.next.next.next.next = new Node(8);

        int k = 3;
        System.out.println("Original List:");
        printList(head);

        head = reverseInGroups(head, k);

        System.out.println("Reversed List in groups of " + k + ":");
        printList(head);
    }

}
