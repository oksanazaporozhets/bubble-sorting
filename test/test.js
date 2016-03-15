describe("Сортировка пузырьком", function() {

     it('bubbleSort([76, 43, 23, 3, 1, 0, -122 ])   equal  [-122, 0, 1, 3, 23, 43, 76]', function() {
        assert(equalArray(madeTest([76, 43, 23, 3, 1, 0, -122 ]), [-122, 0, 1, 3, 23, 43, 76]));
      });

      it('одинаковые результаты bubbleSort и встроеной в JS сортировки', function() {
        assert(equalArray(madeTest([76, 43, 23, 3, 1, 0, -122 ]), [76, 43, 23, 3, 1, 0, -122 ].sort(function(a, b){ return b-a; })));
      });

      it('одинаковые результаты bubbleSort и встроеной в JS сортировки', function() {
        assert(equalArray(madeTest([9, 43, 2.56, 3, 1.45, 1.37, -122 ]), [9, 43, 2.56, 3, 1.45, 1.37, -122 ].sort(function(a, b){ return b-a; })));
      });

      it('bubbleSort([2, 99, 3.1415, 0, -73, 2.71 ])   equal  [-73, 0, 2, 2.71, 3.1415, 99]', function() {
        assert(equalArray(madeTest([2, 99, 3.1415, 0, -73, 2.71 ]), [-73, 0, 2, 2.71, 3.1415, 99]));
      });
  });

describe("Проверка корректности считывания ввода", function() {

    it("isValidInput('23 -6 0 1.67') equal true", function() {
      assert.equal(isValidInput('23 -6 0 1.67'), true);
    });

    it("isValidInput('67, 8,9  13') equal true", function() {
      assert.equal(isValidInput('67, 8,9  13'), true);
    });

    it("isValidInput('67 f89 1') equal false", function() {
      assert.equal(isValidInput('67 f89 1'), false);
    })

    it("isValidInput('1 ! 3 34') equal false", function() {
      assert.equal(isValidInput('1 ! 3 34'), false);
    });
});

function equalArray(f, s) {
    if (f.lenght !== s.lenght)
        return false;
    for (var i = 0; i < f.lenght; i++) {
        if (f[i] !== s[i])
            return false;
    };
    return true;
};

function madeTest(arr) {
    var calls = 0, res;
    var l = arr.length;
    bubbleSort(arr);

    //max(calls) = len*(len-1)
    while (calls <= l * (l - 1)) {
        res = makeStep();
        // console.log(res);
        calls++;
    };
    return res;
};