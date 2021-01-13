function merge2String(string1, string2) {
    let rs = "";
    let arr1 = [...string1];
    let arr2 = [...string2];
    let lengthArr1 = arr1.length;
    let lengthArr2 = arr2.length;
    let max = lengthArr1 > lengthArr2 ? lengthArr1 : lengthArr2;
    for (let i = 0; i < max; i++) {
        if (arr1[i] != null) {
            rs += arr1[i];
        }
        if (arr2[i] != null) {
            rs += arr2[i];
        }
    }
    return rs;
}
console.log(merge2String('abc', '123'));
console.log(merge2String('abc', '0123'));
console.log(merge2String('abcd', '123'));