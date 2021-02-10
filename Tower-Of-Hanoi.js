const hanoi = function (disk, start, temporary, destination){
    if(disk > 0){
        hanoi(disk -1, start, destination, temporary);
        console.log('Move disk ' + ' from ' + start + ' to ' + destination);
        hanoi(disk -1, temporary, start, destination)
    }
}

console.log(hanoi(3, 'starting' , 'temporary' , 'destination'));