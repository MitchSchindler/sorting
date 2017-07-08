function bubbleSort(arr){
    var res;
    for(var i=0; i < arr.length; i++){
        for(var x=0; x < arr.length-1; x++){
            res = comparison(arr[x], arr[x+1]);
            if(!res) swap(arr, x, x+1);
        }
    }
    return arr;
}

// Given an array, and two indices -- index1, index2
// and swap index1 and index2 values
function swap(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

}

// Returns true if a < b
function comparison(a, b){
    return a < b;

}
