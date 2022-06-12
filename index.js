function collectArr() {
    const arr = [];
    while (true) {
        const question = prompt('Enter any word.');
        alert(question);
        if (question === '' || question === null) break;
        let newStr = `${question[0].toUpperCase()}${question.slice(1)}`;
        arr.push(newStr);
    }

    function compareStr(a, b) {
        if (a.length > b.length) return 1;
        if (a.length === b.length) return 0;
        if (a.length < b.length) return -1;
    }

    let result = arr.sort(compareStr);
    alert(result)
}

collectArr();