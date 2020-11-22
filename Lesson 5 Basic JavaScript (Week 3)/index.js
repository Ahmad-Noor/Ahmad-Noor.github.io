
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  context("Expected: "+expected+" Found: "+found, function() {
        it("the result is: "+found, function() {
            assert.equal(expected, found);
        });
    });
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
/* takes one char and returns true or false whether this char is vowel*/
function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}

/* takes one array and it returns the whole sum of it*/
function sum(arr) {
    return arr.reduce((a,b)=>a+b);
}

/* takes one array and it returns the whole product of it*/
function multiply(arr) {
    return arr.reduce((a,b)=>a*b);
}

/* takes one string and it reverses it*/
function reverse(str) {
    return ((str.split("")).reverse()).join("");
}

/* takes one array of strings and returns the longest string word inside*/
function findLongestWord(arr) {
    return arr.reduce((a,b)=>a.length>b.length ? a.length : b.length);
}

/* takes i and an array of filters with all the elememts length that are longer than i*/
function filterLongWords(arr, i) {
    return JSON.stringify(arr.filter((str)=>str.length > i));
}

/* takes one array of and multiplys all the elements by 10*/
function multiplyByTen(arr) {
  return JSON.stringify(arr.map((elem,i,array)=>elem*10));
}

/* takes one array and filters it returning all the elements that are equal to 3*/
function equalToThree(arr) {
  return JSON.stringify(arr.filter((a)=>a === 3));
}

/* takes one array and returns the whole product number of all elements*/
function returnTheProduct(arr) {
  return arr.reduce((a,b)=>a*b);
}

function filter(arr, filterFunc) {   
  const filterArr = []; 
  for(let i=0;i<arr.length;i++) {
  const result = filterFunc(arr[i], i, arr);
    if(result) {         
      filterArr.push(arr[i]);
    } 
  }
  return JSON.stringify(filterArr);
}

function map(arr, mapFunc) {    
  const mapArr = [];
  for(let i=0;i<arr.length;i++) {
    const result = mapFunc(arr[i], i, arr);        
    mapArr.push(result);    
  }    
  return JSON.stringify(mapArr);
}
