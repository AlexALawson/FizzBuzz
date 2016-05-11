$("button").on("click", function (){

	for (var i = 1; i < 100; i++) {

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
});