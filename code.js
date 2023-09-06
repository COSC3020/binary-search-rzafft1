// here we take a sorted list and find the midpoint
// the midpoint will split the list... 
// if the searched element is greater than the value at mid, 
//      we search the right subtree, by splitting the array in half at mid
//      and recursivley calling binary search with the right half
// if the searched element is less than the value at mid, 
//      we search the left subtree, by splitting the array in half at mid
//      and recursivley calling binary search with the left half
// we also check to see if the midpoint is equal to the searched element
// and if it is we return the index
// 
// similar to the previous excersie, if the length is zero, and list[0] isnt
// equal to the searched element, we return -1, otherwise, if list[0] is equal
// to the searched element we return the index

function binarySearch(list, element) 
{
    let mid = Math.floor(list.length/2);

    if (list.length == 1 && list[0] == element)
    {
        return mid;
    }
    if (list.length == 1 && list[0] != element)
    {
        return -1;
    }

    if(list.length == 0) // base case
    {
        return -1; // element not found, return -1
    }
    if (element == list[mid])
    {
        return mid; // found element , return mid / index of element 
    }
    if (element < list[mid])
    {
        let left = list.slice(0, mid);
        let leftSearch = binarySearch(left, element); // search the left subarray
        if (leftSearch == -1) // make sure the value is in the left subarray
        {
            return -1;
        }
        else 
        {
            return leftSearch
        }
    }
    if (element > list[mid])
    {
        let right = list.slice(mid+1, list.length)
        let rightSearch = binarySearch(right, element); // search the right subarray
        if (rightSearch == -1)  // make sure the value is the right subarray
        {
            return -1;
        }
        else 
        {
            return mid + rightSearch + 1
        }

    }
}

////////// testing

arr = [1, 2, 3, 4, 5, 6, 7]
test1 = binarySearch(arr, 1)
test2 = binarySearch(arr, 3)
test3 = binarySearch(arr, 6)
test4 = binarySearch(arr, 7)
test5 = binarySearch(arr, 0)
test6 = binarySearch(arr, 8)

if (test1 == 0) {console.log("test1 pass")}
else (console.log("test 1 fail"))

if (test2 == 2) {console.log("test2 pass")}
else (console.log("test 2 fail"))

if (test3 == 5) {console.log("test3 pass")}
else (console.log("test 3 fail"))

if (test4 == 6) {console.log("test4 pass")}
else (console.log("test 4 fail"))

if (test5 == -1) {console.log("test5 pass")}
else (console.log("test 5 fail"))

if (test6 == -1) {console.log("test6 pass")}
else (console.log("test 6 fail"))
