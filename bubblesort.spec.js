

describe('Bubble Sort', function(){



  beforeEach(function () {
    let counter;
    spyOn(bubbleSort, 'swap').and.callThrough();
    counter = bubbleSort.swap.calls.count();
    console.log(bubbleSort.swap.calls
  });
  // it('getting to the center of tootsiepop involves exactly three licks', function () {
  //   bubbleSort.swap();
  //   expect(bubbleSort.swap.calls.count()).toEqual(3);
  // });


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
