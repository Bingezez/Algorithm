// https://www.geeksforgeeks.org/bubble-sort/

const bubbleSort = (array = []) => {
    if (array.length <= 1) {
        return array;
    }

    let i, j;
    let n = array.length;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
};

const detailReviewBubbleSort = (array = []) => {
    if (array.length <= 1) {
        return array;
    }

    let i, j;
    let n = array.length;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                console.log(`array[${j}] = ${array[j]} > array[${j + 1}] = ${array[j + 1]}`);
                console.log(`Swap array[${j}] = ${array[j]} and array[${j + 1}] = ${array[j + 1]}`);
                console.log(`array = [${array}]\n`);
            }
        }
    }

    return array;
}

module.exports = {
    bubbleSort,
    detailReviewBubbleSort
};