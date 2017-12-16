'use strict';

//vinicio - classes are not hoisted :p
class LinkedList{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  append(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    if(!this.next)
      this.next = node;
    else
      this.next.append(node);

    return this;
  }

  find(value){
    if(this.value === value){
      return this.value;
    }

    else if(this.next === null){
      return null;
    }

    this.next.find(value);
  }

  remove(node){
    if(!(node instanceof LinkedList))
      throw new TypeError('<node> should be an instance of LinkedList');

    //is this the bug? If the very first node is the one we want to delete, replace it with the next node (is this how you would do that?)
    // if(this === node){
    //   this = this.next;
    // }

    if(!this.next)
      return this;
    if(this.next === node){
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    return this;
  }
}

module.exports = LinkedList;
