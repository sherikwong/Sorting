

describe('Bubble Sort', function(){



  // beforeEach(function () {

  // });

  it('calls function right number of times', function () {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4,6,5,1]);
    expect(____.calls.count()).toEqual(10);
  });

  it('handles an empty array', function(){
    expect( bubbleSort.swap([]) ).toEqual( [] );
  });

  it('handles a single item in an array', function(){
    expect( bubbleSort.swap([1]) ).toEqual( [1] );
  });

  it('handles multiple items in an array', function(){
    expect( bubbleSort.swap([3,2,1]) ).toEqual( [1,2,3] );
    expect( bubbleSort.swap([6,8,5,2]) ).toEqual( [2,5,6,8] );
  });
});

