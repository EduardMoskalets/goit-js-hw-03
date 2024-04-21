function makeArray(firstArray, secondArray, maxLength) {
    let newArray = [firstArray, secondArray];
    if (maxLength > newArray) {
        newArray = newArray.slice(0, maxLength);
    } 
    return newArray;
}

