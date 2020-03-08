let list = new DoublyLinkedList(0,1,2);

let arr1 = [5,6];
let arr2 = [7,8,9];

list.push(3,4);
list.push(arr1, arr2);

console.log(list);
console.log(list.get(0));
console.log(list.get(5));
console.log(list.get(6));
console.log(list.get(8));
console.log(list.get(-1));

console.log(list.set("test",3));

console.log(list.toArray());
