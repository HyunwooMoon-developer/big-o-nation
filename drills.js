/* eslint-disable no-unused-vars */
//Q1

//1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog. 
// You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
// Someone yells - "I do, be happy to bring him over"


// A) O(1) constant time : because it's called one.


// 2) Determine the Big O for the following algorithm:
// You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed.
// So you want to know if anyone out of the 15 people have the same breed as your dog.
// You start with the first person and ask him if he has a golden retriever.
// He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// A) O(n) Linear time : it's called one loop(if he says no, and loop)


//2 Even or odd

function isEven(value){
    if(value % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// A) O(1) constant time : it's only action one time.

//3 Are you here?

function areYouHere(arr1, arr2){
    for (let i = 0 ; i < arr1.length ; i++){
        const el1 = arr1[i];
        for(let j = 0 ; j < arr2.length ; j++){
            const el2 = arr2[j];
            if(el1 ===el2)
            return true;
        }
    }
    return false;
}

// A) O(n^2) polynomial time : an algorithm requires 2 levels of looping. O(n * n)

//4 Doubler

function doubleArrayValues(array){
    for (let i = 0 ; i < array.length ; i++){
        array[i] *= 2;
    }
    return array;
}

// A) O(n) Linear time : it's called one loop

//5 Native Search

function nativeSearch(array, item){
    for (let i = 0 ; i < array.length ; i++){
        if(array[i] === item){
            return i;
        }
    }
}

// A) O(n) Linear time : search through the array 

//6 Creating Pairs

function createPairs(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for (let j = i+1 ; j < arr.length ; j++){
            console.log(arr[i] + ' , ' + arr[j]);
        }
    }
}

// A) O(n^2) polynomial time : an algorithm requires 2 levels of looping. O(n * n)

//7 Compute the Sequence

function compute(num){
    let result = [];
    for(let i = 0 ; i <= num ; i++){
        if(i ===1){
            result.push(0);
        }
        else if(i ===2){
            result.push(1);
        }
        else{
            result.push(result[i -2] + result[i -3])
        }
    }
    return result;
}

// A) O(n) Linear time : it's called one loop

//8 An Efficient Search

function efficientSearch(array, item){
    let minIndex = 0;
    let maxIndex = array.length -1;
    let currentIndex;
    let currentElement;

    while(minIndex <= maxIndex){
        currentIndex = Math.floor((minIndex + maxIndex)/2);
        currentElement = array[currentIndex];

        if(currentElement < item){
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item){
            maxIndex = currentIndex -1 ;
        }
        else{
            return currentIndex;
        }
    }
    return -1;
}

// A) O(logn) Logarithmic time : while logarithmic time complexity algorithms do take
//longer with larger inputs, running time increases slowly.

// 9. Random Element

function findRandomElement(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

// A) O(1) constant time : because it's called one.

// 10. What Am I ?

function isWhat(n){
    if(n < 2 || n % 1 !== 0){
        return false;
    }
    for(let i = 2 ; i < n ; ++i){
        if( n % 1 === 0)
        return false;
    }
    return true;
}

// A) O(n) Linear time : Function checks to see it's not the prime number.

