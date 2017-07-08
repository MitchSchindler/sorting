function split(wholeArray) {
    var mid = Math.round(wholeArray.length/2);
  /* your code here to define the firstHalf and secondHalf arrays */

  return [wholeArray.slice(0, mid), wholeArray.slice(mid)];
}

function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    else {
        var result = [];
        var res1 = mergeSort(split(arr)[0]);
        var res2 = mergeSort(split(arr)[1]);

        while(res1.length || res2.length){
            if(res1.length == 0){
                result = result.concat(res2);
                res2 = [];
            }
            if(res2.length == 0){
                result = result.concat(res1);
                res1 = [];
            }
            if(res1[0] > res2[0]) result.push(res2.shift());
            else if(res1[0] <= res2[0]) result.push(res1.shift());
        }
        return result;
    }
}
