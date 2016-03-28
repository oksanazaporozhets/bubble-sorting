"use strict";
var startArray;
var i = 0, j = 0;
var a = [];

function bubbleSort(arr) {
    a = arr;
    var len = a.length;
    i = 0;
    j = 0;
    renderArray(a, len);
    return a;
};

function makeStep() {
    var len = a.length;
    renderArray(a, len);
    highlightTwoElements(j, j + 1, 'current');

    if (i === len - 1 && j == len - 2) {
        showFinishMessage();
        return a;
    };

    if (a[j + 1] < a[j]) {
        highlightTwoElements(j, j + 1, 'swaped');
        var temp;
        temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
    };

    j++;
    if (j === len - 1) {
        i++;
        j = 0;
    };
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