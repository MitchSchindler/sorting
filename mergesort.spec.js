describe('Split Array function', function() {
    var arrOdd = [1, 2, 3, 4, 5];
    var arrEven = [4, 3, 2, 1];
    it('is able to split an array into two halves', function() {
        expect(split(arrOdd).length).toEqual(2);
        expect(split(arrOdd)[0].length).toEqual(3);
        expect(split(arrOdd)[1].length).toEqual(2);
    });

    it('is able to sort multiple element array', function(){
        expect(mergeSort(arrEven)).toEqual([1, 2, 3, 4]);
    });
});
