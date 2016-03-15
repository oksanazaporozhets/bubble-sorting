"use strict";
var startArray;
var i, j, temp;
var count = 0;
var a = [];

function bubbleSort(arr) {
    a = arr;
    var len = a.length;
    renderArray(a, len);
    count = 0;
    return a;
};

function makeStep() {
    var len = a.length;
    renderArray(a, len);
    if (count >= len * (len - 1)) {
        showFinishMessage();
        return a;
    };

    i = Math.floor(count / len);
    j = count - i * len;
    highlightTwoElements(j, j + 1, 'current');

    if (a[j + 1] < a[j]) {
        highlightTwoElements(j, j + 1, 'swaped');
        temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
    }
    count++;
    return a;
};

function isValidInput(str) {
    var list = str.split(/[ ,]+/);
    return list.every(function(x) {
        return (!isNaN(parseFloat(x)) || x === '');
    });
};

function isValidInput(str) {
    var list = str.split(/[ ,]+/);
    return list.every(function(x) {
        return (!isNaN(parseFloat(x)) || x === '');
    });
};


function parseInputArray(str) {
    var res = [];
    var list = str.split(/[ ,]+/);
    for (var i = 0; i < list.length; i++) {
        if (list[i] !== '') {
            res.push(parseFloat(list[i]));
        };
    };
    return res;
};