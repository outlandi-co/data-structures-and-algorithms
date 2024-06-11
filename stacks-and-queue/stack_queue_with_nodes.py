# stack_queue_with_nodes.py

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        new_node = Node(value)
        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if self.isEmpty():
            raise Exception("Stack is empty")
        else:
            value = self.top.value
            self.top = self.top.next
            return value

    def peek(self):
        if self.isEmpty():
            raise Exception("Stack is empty")
        else:
            return self.top.value

    def isEmpty(self):
        return self.top is None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.isEmpty():
            self.front = new_node
            self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.isEmpty():
            raise Exception("Queue is empty")
        else:
            value = self.front.value
            self.front = self.front.next
            if self.front is None:
                self.rear = None
            return value

    def peek(self):
        if self.isEmpty():
            raise Exception("Queue is empty")
        else:
            return self.front.value

    def isEmpty(self):
        return self.front is None

# Tests
def test_stack():
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)

    assert stack.peek() == 3
    assert stack.pop() == 3
    assert stack.pop() == 2
    assert stack.isEmpty() == False
    assert stack.pop() == 1
    assert stack.isEmpty() == True

    try:
        stack.peek()
    except Exception as e:
        assert str(e) == "Stack is empty"

def test_queue():
    queue = Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    assert queue.peek() == 1
    assert queue.dequeue() == 1
    assert queue.dequeue() == 2
    assert queue.isEmpty() == False
    assert queue.dequeue() == 3
    assert queue.isEmpty() == True

    try:
        queue.peek()
    except Exception as e:
        assert str(e) == "Queue is empty"

if __name__ == "__main__":
    test_stack()
    test_queue()
    print("All tests passed.")
