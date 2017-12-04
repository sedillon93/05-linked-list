'use strict';

// function LinkedList(){}
// function LinkedList...
//vinicio - classes are not hoisted :p
class LinkedList{
  //new LinkedList()...
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      console.log(node, `is the node`);
      console.log(this, `is 'this'`);
      throw new TypeError('<node> should be an instance of LinkedList');

    // vinicio - we know we are at the last element if there is no next
    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  //TODO : Homework
  find(value){
    if(this.value = value){
      return this;
    }

    else if(this.next = null){  //if this is the last node, the value isn't in the list
      return null;
    }

    else {                      //go to the next node and check that value
      this.next.find(value)
    };
  }

  //vinicio - remove has( intentionally n_o), a bug. Can you find it?
  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    //if the very first node is the one we want to delete, replace it with the next node (is this how you would do that?)
    // if(this === node){
    //   this = this.next;
    // }

    if(!this.next)
      return this;
    if(this.next === node){
      //vinicio - here we know we need to remove the NEXT node
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}

let list = new LinkedList(2);
console.log(list);
list.append(10);
console.log(list);
list.append(5);
list.append(2);

module.exports = LinkedList;
