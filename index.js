import LinkedList from "./linkedList.js";

let myList = new LinkedList();
myList.prepend('foo');
myList.append('bar');
myList.prepend('ice');
console.log(myList.toString());
console.log("size:", myList.size);
console.log(myList.contains('bar'));
console.log(myList.contains('foo'));
console.log(myList.contains('ice'));
console.log(myList.contains('cream'));