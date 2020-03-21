const HashMap = require('./hashMaps') // import the HashMap module. 


function main() { //Create a function called main()
    const lotr = new HashMap() // Inside your main() function, create a hash map called lotr.

    lotr.MAX_LOAD_RATIO = 0.5 // set the max_load_ratio
    lotr.SIZE_RATIO = 3. // set the size_ratio
    console.log(lotr)

    lotr.set('Hobbit', 'Bilbo') // Add the following items to your hash map
    lotr.set('Hobbit', 'Frodo')
    lotr.set('Wizard', 'Gandolf')
    lotr.set('Human', 'Aragorn')
    lotr.set('Elf', 'Legolas')
    lotr.set('Maiar', 'The Necromancer')
    lotr.set('Maiar', 'Sauron')
    lotr.set('RingBearer', 'Gollum')
    lotr.set('LadyOfLight', 'Galadriel')
    lotr.set('HalfElven', 'Arwen')
    lotr.set('Ent', 'Treebeard')
    console.log(lotr) // Print your hash map 
    console.log(lotr.get('Maiar'), lotr.get('Hobbit')) // values of Maiar and Hobbit

    console.log(removeDuplicates('google')) // output: 'gole'
    console.log(removeDuplicates('google all that you think can think of')) // output: gole athyuinkcf
}

main()

// 4. Remove duplicates
// delete all duplicated characters in a string and keep only the first occurrence of each character.

function removeDuplicates(string) {
    // instantiate HashMap
    let myHashmap = new HashMap(string.length);
  
    //split each char of the string
    let arrayChar = string.split('');
  
    //assign each char to the hashmap
    for (let i = 0; i < arrayChar.length; i++) {
      myHashmap.set(arrayChar[i], arrayChar[i])
    }
  
    //cocat each char to a string and return;
    let newString = '';
    for(let i = 0; i < arrayChar.length; i++) {
      if(!newString.includes(arrayChar[i])) {
        newString += myHashmap.get(arrayChar[i]);
      }
    }
    console.log(newString);
  }
  

// 5. Any permutation a palindrome
// 6. Anagram grouping
// 7. Separate Chaining