'use strict';

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

  find(nodeValue){
    if(this.value !== nodeValue && this.next){
      return this.next.find(nodeValue);
    }

    else if(this.value === nodeValue){
      return this;
    }

      if(!this.next){
        return null;
      }
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
