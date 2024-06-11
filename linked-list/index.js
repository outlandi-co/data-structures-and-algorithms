'use strict';

// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Initialize next to null
  }
}

// Define the LinkedList class
class LinkedList {
  constructor() {
    this.head = null; // Initialize head to null for an empty list
  }

  // Method to insert a new node at the head of the list with O(1) time complexity
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value
    newNode.next = this.head; // Set the next pointer of the new node to the current head
    this.head = newNode; // Update the head of the list to the new node
  }

  // Method to check if a value exists in the linked list
  includes(value) {
    let current = this.head; // Start from the head of the list
    while (current !== null) { // Iterate through each node in the list
      if (current.value === value) { // If the value of the current node matches the target value
        return true; // Return true
      }
      current = current.next; // Move to the next node
    }
    return false; // If the value is not found, return false
  }

  // Method to return a string representing all the values in the linked list
  toString() {
    let result = ''; // Initialize an empty string
    let current = this.head; // Start from the head of the list
    while (current !== null) { // Iterate through each node in the list
      result += `{ ${current.value} } -> `; // Add the value of the current node to the result string
      current = current.next; // Move to the next node
    }
    result += 'NULL'; // Add "NULL" to represent the end of the list
    return result; // Return the resulting string
  }
}

// Example usage:
const list = new LinkedList(); // Create a new instance of the LinkedList class
list.insert('c'); // Insert nodes with values 'c', 'b', and 'a' at the head of the list
list.insert('b');
list.insert('a');
console.log(list.toString()); // Print the linked list: "{ a } -> { b } -> { c } -> NULL"
console.log(list.includes('b')); // Check if 'b' exists in the list (true)
console.log(list.includes('d')); // Check if 'd' exists in the list (false)

module.exports = LinkedList;
