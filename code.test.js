const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) 
    {
        var testArray = JSON.parse(JSON.stringify(arr));
        testArray.sort(function(a, b) { return a - b; })
        if(testArray.length > 2) {
            return binarySearch(testArray, testArray[0]) === 0;
        } else {
            return binarySearch(testArray, "foo") === -1;
        }
        
    });

jsc.assert(testSearch);
