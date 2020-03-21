Demonstrate understanding of Hash maps

1. Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

m =  11
keys =  10, 22, 31, 4,  15, 28, 17, 88, 59

hash functions: closed hashing
if slot is empty = keys % m 
if slot is taken = keys % m +1 and so on 
(if collision occurs insert k at next free slot)


|  m 	| keys  |
|---	|---	|
|   0	|  10	| 
|   1	|  31	| 
|   2	|  22   | 
|   3	|  	4   |
|   4	|  15	| 
|   5	|  28 	|
|   6	|  17	| 
|   7	|  59	|
|   8	|  88	| 
|   9	|   	|
|   10	|   	|
|   11	|   	|

1. Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

m =  9
keys =  5, 28, 19, 15, 20, 33, 12, 17, 10

hash functions: open hashing
if slot is empty = keys % m 
(if collision occurs insert k in the linked list(ll) at the particular m(index))


|  m 	| keys  | keys(ll)  | keys(ll)  | keys(ll)  |     
|---	|---	|---        |---        |---        |
|   0	|   5	|           |           |           |
|   1	|   15	| 12        |  17       |    10     |
|   2	|   19  | 20        |           
|   3	|   28	| 33        |           
|   4	|   	                     
|   5	|   	                   
|   6	|   	                    
|   7	|   	                   
|   8	|   	                     
|   9	|   	                    
