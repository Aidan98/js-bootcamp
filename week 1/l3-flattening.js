let arrays = [[1, 2, 3], [4, 5], [6]];

let flatten = [].concat.apply([], arrays);

console.log(flatten);
