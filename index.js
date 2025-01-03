import LinkedList from "./linkedList.js";

let myList = new LinkedList();
myList.prepend('foo');
myList.append('bar');
myList.prepend('ice');
console.log(myList.toString());
console.log('head:', myList?.head?.value);
console.log('tail:', myList?.tail?.value);