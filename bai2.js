function merge2String(string1, string2) {
    var input1 = string1;
    var input1arr = input1.split('');

    var input2 = string2;
    var input2arr = input2.split('');

    var finalString = '';
    var j = 0;

for(let i = 0; i < input1arr.length; i++) {
    finalString += input1arr[i];
    for(j = i; j < i + 1; j++) {
        if(input2arr[j] == undefined) {
            finalString += '';
        }else {
            finalString += input2arr[j];
        }
        }
    }
    if(input2arr.length > input1arr.length) {
        for(let k = j; k < input2arr.length; k++ ) {
            finalString += input2arr[k];
        }
    }
    return finalString;
}

console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcd', '123'));