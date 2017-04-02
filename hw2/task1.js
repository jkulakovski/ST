let arrObj = [{ a: 1, b: 1, c: 1 },
              { a: 1, b: 1 },
              { a: 2 },
              { a: 1, b: 2 }];

function UniqObj(arr, filterObj) {
    let values = {};
    return arr.filter(function(item) {
        let val = item[filterObj];
        let exists = values[val];
        values[val] = true;
        return !exists;
    });
}
console.log(UniqObj(arrObj, 'a'));
console.log(UniqObj(arrObj, 'b'));
console.log(UniqObj(arrObj, 'a','b'));
console.log(UniqObj(arrObj, 'f'));