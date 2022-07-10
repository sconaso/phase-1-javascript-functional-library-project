// CREATE FUNCTION TO CONVERT OBJECT TO ARRAY IF NEEDED
function convertObj(input){
    if (typeof input === 'object'){
        return Object.values(input)
    } else return input
}

function myEach(collection, callback) {
    let inputArray = convertObj(collection)

    // run callback on each item in array and return collection
    for (let i = 0; i < inputArray.length; i++){
        callback(inputArray[i])
    }

    return collection
}

function myMap(collection, callback) {
    let inputArray = convertObj(collection)

    // run callback on each item in array and return new array
    let newArray = []
    for (let i = 0; i < inputArray.length; i++){
        newArray[i] = callback(inputArray[i])
    }

    return newArray
}

function myReduce(collection, callback, acc) {
    let inputArray = convertObj(collection)

    // if acc is not defined, use index 0 as acc and remove index 0 from the array
    if (!acc){
        acc = inputArray[0]
        inputArray = inputArray.slice(1)
    }

    // start with acc and run callback on each item, updating acc after each run
    for (let i = 0; i < inputArray.length; i++){
        acc = callback(acc, inputArray[i], inputArray)
    }

    return acc
}

function myFind(collection, predicate) {
    let inputArray = convertObj(collection)
    
    // return first item that passes predicate as true, otherwise undefined
    for (let i = 0; i < inputArray.length; i++){
        if (predicate(inputArray[i]) === true) return inputArray[i]
    }

    return undefined
}

function myFilter(collection, predicate){
    let inputArray = convertObj(collection)

    // return all items that pass as true, otherwise empty array
    let newArray =[]
    for (let i = 0; i < inputArray.length; i++){
        if (predicate(inputArray[i]) === true) newArray.push(inputArray[i])
    }

    return newArray
}

function mySize(collection){
    let inputArray = convertObj(collection)

    // return the number of values in the array
    return inputArray.length
}

function myFirst(arr, n){
    let result = n ? arr.slice(0, n) : arr[0]
    return result

    // ----- this was my solution that worked in console, but not with index.js -----
    // if (!n){
    //     return arr[0]
    // }
    // 
    // let newArray = []
    // for (i = 0; i < n; i++){
    //     newArray.push(arr[i])
    // }
    // return newArray
}

function myLast(arr, n){
    let len = arr.length
    let result = n ? arr.slice(len - n) : arr[len - 1]
    return result
}

function myKeys(obj){
    let keys = []
    for (let key in obj){
        keys.push(key)
    }
    return keys
}

function myValues(obj){
    let values = []
    for (let key in obj){
        values.push(obj[key])
    }
    return values
}