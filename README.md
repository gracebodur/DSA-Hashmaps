## DSA-Hashmaps

####  Key Terms

**Hashing** 
It is the process of mapping a key to a position in the hash table.

**Hash Table** 
A key value look up.

A hash table is a storage that holds the records (the key and any value associated with the key). Hash maps require a hash-table. The hash-table is usually implemented internally using an array. Each slot in the array holds a key-value pair or is empty (null).

**Hash maps**
Are unordered associations between keys and values.

**Hash Function** 
A hash function maps keys to positions in the hash table. A function that generates a value of fixed length for each input that it gets.

**Collisions**
The result of two keys hashing to the same index.

Slows down reading and writing with a hash table with an 0(n/k) operation.

A collision is a case when we try to add different values with the same key. To avoid returning back the value and saying that the HashMap can't add this new value because it already contains this key, what it does is, it creates a linked list. And keeps on adding the values with the same key by creating new node in the linked list present at the array position calculated with the hash of that key.

**Open addressing**
a hash collision is resolved by probing, or searching through alternate locations in the array (the probe sequence) until either the target record is found, or an unused array slot is found, which indicates that there is no such key in the table.[Open addressing(Wikipedia)](https://en.wikipedia.org/wiki/Open_addressing)


##### Resolving Collisions

1. **Linear Probbing**
  if the key hashes to the same index as a prev stored key is assigned the the next available slot at the table.

 - ***clustering*** a drawback to linear probbing.Clustering means that when once a collision occurs it significantly increase chances that another collision will occur in the same area.

2. **Separate chaining**
    In the seperate chaining model the hash table is actually an array of pointers to linked lists. When a collision occurs, the key can be inserted in constant time at the head of the appropriate linked list.

##### Properties of a good hash function
- Makes use of all information provided by a given key in order to maximize the number possible hash values.
- Uniformly distributes output across table. Hash values should be spread evenly accross the hash table. This will reduce the length of linked lists should collisions occur.
- Maps similar keys to very different hash values
- Uses only very fast operations

References:

[Hash Tables by Harvard CS50](https://www.youtube.com/watch?v=h2d9b_nEzoA)

[Hash Table Animation-Open Hashing](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)

[Hash Table Animation-Closed Hashing](https://www.cs.usfca.edu/~galles/visualization/OpenHash.html)
