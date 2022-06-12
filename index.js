function collectArr() {
    const arr = [];
    while (true) {
        const question = prompt('Enter any word.');
        alert(question);
        if (question === '' || question === null) break;
        let newStr = `${question[0].toUpperCase()}${question.slice(1)}`;
        arr.push(newStr);
    }

    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a === b) return 0;
        if (a < b) return -1;
    }

    let result = arr.sort(compareNumeric);
    alert(result)
}

collectArr();