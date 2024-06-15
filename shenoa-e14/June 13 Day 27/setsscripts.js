//Creation of two sets
const mySet = new Set();
const mySet2 = new Set();

//Adding elements to the sets
mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('grape');
mySet.add('apple'); // Duplicate entry
mySet2.add('apple');
mySet2.add('potato');
mySet2.add('garlic');
mySet2.add('onion');

//Combining sets
const combinedSet = new Set([...mySet, ...mySet2]);

//Displaying the set
const resultParagraph = document.getElementById('result');
resultParagraph.innerHTML = 
            "My set contains: " + [...mySet].join(', ') + "<br>" +
            "Set 2 contains: " + [...mySet2].join(', ') + "<br>" +
            "The combined set contains: " + [...combinedSet].join(', ');
