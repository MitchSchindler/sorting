describe('Bubble Sort', function(){
    var arrSingle = [1];
    var arrMultiple = [6, 3, 2, 10];

    // before(function(){
    //     spyOn('bubbleSort').and.callThrough();
    //     spyOn('swap').and.callThrough();
    //     spyOn('comparison').and.callThrough();
    // });

    it('handles an emtpy array',function(){
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles single element array', function(){
        expect(bubbleSort(arrSingle)).toEqual(arrSingle);
    });

    it('handles multiple element array', function(){
        expect(bubbleSort(arrMultiple)).toEqual([2, 3, 6, 10]);
    });

    // it('calls bubbleSort the right number of times', function(){

    // });

    // it('calls bubbleSort the right number of times', function(){});

    // it('calls bubbleSort the right number of times', function(){});

});
