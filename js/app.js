
var x = prompt("enter a number"); {
	x = +x
	y = parseInt(x); {
	for (var i = 1; i <= y; i++) {

	if (i % 3 == 0 && i % 5 == 0) {
		$("ol").append("<li>" + "FizzBuzz" + "</li>")
	}
	else if (i % 3 == 0) {
		$("ol").append("<li>" + "Fizz" + "</li>")
	}
 	else if (i % 5 == 0) {
 		$("ol").append("<li>" + "Buzz" + "</li>")
 	}
 	else {
 		$("ol").append("<li>" + i + "</li>") 	}
 }
}
}