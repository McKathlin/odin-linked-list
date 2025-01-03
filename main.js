import LinkedList from "./linkedList.js";

const myList = new LinkedList();
myList.prepend('foo');
myList.append('bar');
myList.prepend('ice');
console.log(myList.toString());
console.log("size:", myList.size);

console.log(myList.insertAt("cream", 1).toString());
console.log("size:", myList.size);

console.log(myList.removeAt(2));
console.log("size:", myList.size);

console.log(myList.insertAt("vanilla", 0).toString());
console.log("size:", myList.size);

console.log(myList.insertAt("baz", 4).toString());
console.log("size:", myList.size);

console.log(myList.tail.value);

const animalList = new LinkedList();
animalList.append("dog");
animalList.append("cat");
animalList.append("parrot");
animalList.append("hamster");
animalList.append("snake");
animalList.append("turtle");
console.log(animalList.toString());