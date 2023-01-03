const linearSearch = (array = [], value) => {
    let isFound = false;
    let position = -1;
    let index = 0;

    while (!isFound && index < array.length) {
        if (array[index] == value) {
            isFound = true;
            position = index;
        } else {
            index += 1;
        }
    }
};

module.exports = {
    linearSearch
};