let list = new DoublyLinkedList()

let test = [7,8,9]
list.push(0,1,2,3,4,5,6)
list.push(test)

console.log(list);
console.log(list.get(0));
console.log(list.get(5));
console.log(list.get(6));
console.log(list.get(8));
console.log(list.get(-1));

console.log(list.set("test",3));
