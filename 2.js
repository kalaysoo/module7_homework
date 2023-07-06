let obj = {
    first: 1,
    second: 2,
    third: 3,
    4: "fourth"
};

function propCheck(str, obj) {
    return Object.keys(obj).includes(str.toString(), 0);
};