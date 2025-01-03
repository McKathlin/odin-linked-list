import LinkedList from "./linkedList.js";

let myList = new LinkedList();
myList.prepend('foo');
myList.append('bar');
myList.prepend('ice');
console.log(myList.toString());
console.log("size:", myList.size);

console.log(myList.insertAt(1, "cream").toString());
console.log("size:", myList.size);

console.log(myList.removeAt(2));
console.log("size:", myList.size);

console.log(myList.toString());