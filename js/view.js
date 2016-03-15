document.getElementById('nextStepBtn').addEventListener('click', makeStep);

document.getElementById('resetArray').addEventListener('click', function() {
    document.getElementById('sortingResult').innerHTML = '';
    document.getElementById('stopMessage').innerHTML = '';
    document.getElementById('nextStepBtn').style.display = 'none';
});

document.getElementById('loadArray').addEventListener('click', initializeSorting);

function initializeSorting() {
    document.getElementById('sortingResult').innerHTML = c;
    document.getElementById('stopMessage').innerHTML = '';
    var inputStr = document.getElementById('inputArray').value;
    count = 0;
    if (isValidInput(inputStr)) {
        startArray = parseInputArray(inputStr);
        document.getElementById('nextStepBtn').style.display = 'block';
        bubbleSort(startArray);
    } else {
        document.getElementById('inputArray').value = '';
        alert('Исходные данные должны содержать только числа через пробел или запятую');
        return 1;
    };
};


function renderArray(a, len) {
    document.getElementById('sortingResult').innerHTML = '';
    var array = document.getElementById('sortingResult');
    array.innerHTML = '';
    var item;
    for (var k = 0; k < len; k++) {
        item = document.createElement('span');
        item.id = "a" + k;
        item.innerHTML = a[k];
        array.appendChild(item);
    }
};


function showFinishMessage() {
    document.getElementById('stopMessage').innerHTML = 'Массив уже отсортирован, алгоритм завершил работу';
};


function highlightTwoElements(i, j, classAdded) {
    console.log(i, j);
    var current1, current2;
    current1 = '#a' + i;
    current2 = '#a' + j;
    $(current1).addClass(classAdded);
    $(current2).addClass(classAdded);
};