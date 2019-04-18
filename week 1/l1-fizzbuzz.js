let number 0;

for (let i = 0; i < 100 ; i++) {
	number += 1;
	if (number % 3 === 0 && number % 5 === 0) {
		console.log('FizzBuzz');
	} else if(number % 5 === 0) {
		console.log('Buzz');
	} else if (number % 3 === 0){
		console.log('Buzz');
	} else {
		console.log(number);
	}
}