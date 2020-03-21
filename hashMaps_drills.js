const HashMap = require('./hashMaps') // import the HashMap module. 


function main() {
    const lotr = new HashMap()

    lotr.MAX_LOAD_RATIO = 0.5
    lotr.SIZE_RATIO = 3.
    console.log(lotr)

}

main()


// 2. WhatDoesThisDo
// 3. Demonstrate understanding of Hash maps
// 4. Remove duplicates
// 5. Any permutation a palindrome
// 6. Anagram grouping
// 7. Separate Chaining