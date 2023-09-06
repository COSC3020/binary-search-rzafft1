// here we take a sorted list and find the midpoint
// the midpoint will split the list... 
// if the searched element is greater than the value at mid, 
//      we search the right subtree, by splitting the array in half at mid
//      and recursively calling binary search with the right half
// if the searched element is less than the value at mid, 
//      we search the left subtree, by splitting the array in half at mid
//      and recursivley calling binary search with the left half
// we also check to see if the midpoint is equal to the searched element
// and if it is we return the index
// 
// similar to the previous exercise, if the length is zero, and list[0] isnt
// equal to the searched element, we return -1, otherwise, if list[0] is equal
// to the searched element we return the index

function binarySearch(list, element) 
{
    let mid = Math.floor(list.length/2);
    
    if (list.length == 1 && list[0] == element)
    {
        return mid; // return index
    }
    if (list.length == 1 && list[0] != element)
    {
        return -1; // not found
    } 

    if(list.length == 0) // base case
    {
        return -1; // not found 
    }

    if (element == list[mid])
    {
        // now instead of just returning mid
        // lets search the left tree and make sure the element isnt also at a lower index
        let left = list.slice(0, mid);
        let leftSearch = binarySearch(left, element); // search the left subarray
        if (leftSearch != -1) // make sure the value is in the left subarray
        {
            return leftSearch // found index at lower position
        }
        return mid; // return index

    }
    if (element < list[mid])
    {
        let left = list.slice(0, mid);
        let leftSearch = binarySearch(left, element); // search the left subarray
        if (leftSearch == -1) // make sure the value is in the left subarray
        {
            return -1; // not found
        }
        else 
        {
            return leftSearch // here we just return the left index because it is still in line with the original index
        }
    }
    if (element > list[mid])
    {
        let right = list.slice(mid+1, list.length)
        let rightSearch = binarySearch(right, element); // search the right subarray
        if (rightSearch == -1)  // make sure the value is the right subarray
        {
            return -1; // not found
        }
        else 
        {
            return mid + rightSearch + 1 // here we return the right index + the mid index + 1
        }
    }
    return -1; // not found
}

