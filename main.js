const onlyNum1 = e => {
    const value = e.value
    e.value = value.replace(/\D/g, '')
}
const clickBtn = document.querySelector('.btn')
clickBtn.onclick = function () {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    const action = document.querySelector('.action').value;
    const clearAll = document.querySelector('.clear');
    let result = document.querySelector('.result');
    let outResult;
    switch (action) {
        case '+':
            outResult = +num1 + +num2;
            result.value = outResult;
            break;
        case '-':
            outResult = +num1 - +num2;
            result.value = outResult;
            break;
        case '*':
            outResult = +num1 * +num2;
            result.value = outResult;
            break;
        case '/':
            if (num2 === '0') {
                outResult = 0;
            } else {
                outResult = +num1 / +num2;
                result.value = Math.round(outResult);
            }
            break;
        default:
            outResult = 0
    }
    clearAll.onclick = function () {
        result.value = '0';
    }
}
