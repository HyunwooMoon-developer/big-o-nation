//sort, then find the two highest
//loop through and store the current largest and second largest

/*onst largestProduct = function(arr){
    if(arr.length <= 1){
        throw new Error('Must provide at least two numbers')
    }

    let largest = arr[0];
    let secondLargest = arr[1];
    if(secondLargest > largest){
        [largest, secondLargest] = [secondLargest, largest];
    }
    let smallest = secondLargest;
    let secondSmallest = largest;
    for(let i = 2 ; i < arr.length ; i++){
        const value = arr[i];
        if(value > largest){
            secondLargest = largest;
            largest = value;
        }
        else if(value > secondLargest){
            secondLargest = value;
        }
        if(value < smallest){
            secondSmallest = smallest;
            smallest = value;
        }
        else if(value < secondSmallest){
            secondSmallest = value;
        }
    }
    const largestProduct = largest * secondLargest;
    const smallestProduct = smallest * secondSmallest;
    if(largestProduct > smallestProduct){
        return largestProduct;
    }
    else{
        return smallestProduct;
    }
}*/

const largestProduct = function(arr){
    if(arr.length <=1){
        throw new Error('Must provide at least two numbers');
    }
    let largest = -Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        const valueA = arr[i];
        for(let j = i+1 ; j < arr.length; j++){
            const valueB = arr[j];
            const product = valueA * valueB ;
            if(product > largest){
                largest = product;
            }
        }
    }
    return largest;
}

console.log(largestProduct([3,5,2,6,8,1])) // 48
console.log(largestProduct([3, 5, -2, 6, 8, 1])) //48
console.log(largestProduct([0, 0, 0, 0]))  // 0;
console.log(largestProduct([3, -5, -10, 6, 8 , 1])) //50
console.log(largestProduct([3, 5, 2 , 6.5, 8 , 1])) // 52
console.log(largestProduct([3, 5, 2, 6, 8, 8])) //64

try{
    console.log(largestProduct([]));
}catch(e){
    console.log('error');
}