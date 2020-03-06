let list = new DoublyLinkedList()

list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)

console.log(list);
console.log(list.get(0));
console.log(list.get(5));
console.log(list.get(6));
console.log(list.get(8));
console.log(list.get(-1));

console.log(list.set("test",3));

