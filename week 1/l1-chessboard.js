let board = "";
let size = 8;
let length = 0;

for (;length < size; length++) {
	for (let width = 0; width < size; width++){
		if (length % 2 !== 0) {
			black = " ";
            white = "#";
		} else {
			black = "#";
            white = " ";
		} if (width % 2 === 0) {
            board += white;
        } else {
            board += black;
        }
	}
	board += "\n";
}
console.log(board);
