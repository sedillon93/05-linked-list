'use strict';

const LinkedList = require(`../model/find`);



describe(`model.js`, () => {
  let result = new LinkedList(1);
  result.append(new LinkedList(3));
  result.append(new LinkedList(5));

  test(`LinkedList's find method should return node if its value matches the value given as the argument`, () => {
    let foundValue = result.find(3);
    expect(foundValue).toEqual(3);
  });
  test(`LinkedList's find method should return null if it reaches the final node`, () => {
    let foundValue = result.find(9);
    expect(foundValue).toBeNull();
  });
});
