// Check if a linked list is palindrome (without extra space)

package Task2;


class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Prog13 {

    // Function to check palindrome
    public static boolean isPalindrome(Node head) {

        if (head == null || head.next == null)
            return true;

        // Step 1: Find middle using slow & fast pointers
        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse second half
        Node secondHalf = reverse(slow);

        // Step 3: Compare both halves
        Node firstHalf = head;
        Node temp = secondHalf;

        while (temp != null) {
            if (firstHalf.data != temp.data) {
                return false;
            }
            firstHalf = firstHalf.next;
            temp = temp.next;
        }

        return true;
    }

    // Reverse function
    public static Node reverse(Node head) {
        Node prev = null;
        Node curr = head;

        while (curr != null) {
            Node nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }

    // Print list
    public static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {

        // Creating a linked list: 1 → 2 → 3 → 2 → 1
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next.next = new Node(2);
        head.next.next.next.next = new Node(1);

        System.out.println("Linked List:");
        printList(head);

        if (isPalindrome(head)) {
            System.out.println("It is a Palindrome");
        } else {
            System.out.println("Not a Palindrome");
        }
    }
}

