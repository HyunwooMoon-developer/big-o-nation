//What is Big-O?
//mathematical notation that describes algorithm efficiency
//time&space complexity
//describes the growth rate of algoritms


/* eslint-disable no-constant-condition */
function find(arr, num){
    let i = 0 ;
    while(true){
        const index = Math.floor(Math.random()*arr.length);
        i++;
        if(arr[index] === num){
            break;
        }
    }
    console.log(`${num} was found in trial #${i}`)
}

const arr = [15, 16, 10, 2, 9, 5, 6];
find(arr, 16);

function product(array){
    let product = 1;
    for(let i = 0 ; i < array.length; i++){
        product *= array[i];
    }
    return product;
}

const array = [2,3,5,10];
console.log(product(array));

//O(1) constant time
function getFirstItem(array){
    return array[0];
}

console.log(getFirstItem([1,2,3,4,5]))

//O(log n) Logarithmic time
function logPowerOfTwoValues(array){
    for(let i = 1 ; i < array.length ; i*= 2){
        console.log(array[i]);
    }
}

logPowerOfTwoValues([2,3,5,7,9,10]);
logPowerOfTwoValues([2,3]);

//O(n) Linear time
function includes(items, itemToMatch){
    for(let i =0 ; i < items.length ; i++){
        if(items[i] === itemToMatch){
            return true;
        }
    }
    return false;
}

console.log(includes([1,2,3,4,5], 4));
console.log(includes([1,2,3,4,5],6));

//O(n^2) Polynomial time
function timesTable(arr){
    const results = [];
    for(let i = 0 ; i < arr.length; i++){
        results.push([]);
        for(let j = 0 ; j < arr.length ; j++){
            results[i].push(arr[i]*arr[j])
        }
    }
    return results
}

console.log(timesTable([2,4,6,8]))

function sumProducts(arr){
    let sum = 0 ;
    for(let i = 0 ; i < arr.length; i++){
        sum += arr[i];
    }

    let product = 1;
    for(let i = 0 ; i < arr.length ; i++){
        product *= arr[i];
    }
    console.log(`sum is ${sum} and product is ${product}`)
}

sumProducts([1,2,3,4,5])