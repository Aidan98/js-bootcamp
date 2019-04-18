let list = [];
function range (start, end, step){

		for (let i = start; i <= end; i+= step) {
		list.push(i);
	}
	
	console.log(list);
}
range(1, 10, 2);