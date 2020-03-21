## DSA-Hashmaps

####  Key Terms

**Hashing** 
It is the process of mapping a key to a position in the hash table.

**Hash Table** 
A hash table is a storage that holds the records (the key and any value associated with the key). Hash maps require a hash-table. The hash-table is usually implemented internally using an array. Each slot in the array holds a key-value pair or is empty (null).

**Hash maps**
Are unordered associations between keys and values.

**Hash Function** 
A hash function maps keys to positions in the hash table. A function that generates a value of fixed length for each input that it gets.

**Capacity**
**Collisions**
Slows down reading and writing with a hash table with an 0(n) operation.

A collision is a case when we try to add different values with the same key. To avoid returning back the value and saying that the HashMap can’t add this new value because it already contains this key, what it does is, it creates a linked list. And keeps on adding the values with the same key by creating new node in the linked list present at the array position calculated with the hash of that key.
**Open addressing**
**Separate chaining**