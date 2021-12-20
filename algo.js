class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLL {
    constructor() {
            this.head = null;
        }

    insertAtFront(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtBack(val){
        var d = new Node(val);      
        var runner = this.head;
        while (runner.next) {      
          runner = runner.next
        }
        runner.next = d;
    }

    reverse(){
      // reverse this list in-place without using any extra list. 

      let originalhead = this.head;
      let runner = this.head;
      let follower = this.head;
      let next = null;

      // Iterate the list until runner = null
      while(runner) {
        next = runner.next
        runner.next = follower
        follower = runner;
        runner = next;
      }

      // At the end, the follower is at the new head
      //    then make sure the original head's next 
      //       points to NULL
      this.head = follower;
      originalhead.next = null;
    }

    removeNegatives(){
        //remove all the nodes with negative values. 
        let runner = this.head;
        let follower = this.head;
        while (runner) {
          if (runner.val < 0) {
            follower.next = runner.next;
            follower = runner.next;
            runner.next = null;
            runner = follower;
          } else {
            follower = runner;
            runner = runner.next;
          }
        }
    }

    printList(){
        if(!this.head){
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while(runner){ // while(runner != null)
            console.log(runner.val);
            runner = runner.next;            
        }
    }

}

//theres a bracket error at line 58 idk y
console.log("*******************************");
console.log("Build a SLL");
var a = new Node(1)
var b = new Node(2)
var c = new Node(-3)
var d = new Node(4)
a.next = b;
b.next = c; 
c.next = d;
var list1 = new SLL();
list1.head = a;
list1.printList();
console.log("");

console.log("*******************************");
console.log("Reverse SLL");
list1.reverse();
list1.printList();

console.log("");
console.log("*******************************");
console.log("Romove negative SLL");
list1.removeNegatives();
list1.printList();
