/*
*
* Implementation of the Fischer-Yates Schuffle
* 
* Implementation by: Lexie Martin and Jordan Fray
*
* This is code is intended for use in a portfolio. It is a small piece of a larger program that is owned by a client. 
* 
* The Fischer-Yates Shuffle is an algorithm to arrange set permutations. It was originally published by Ronald Fischer and Frank Yates. 
*
* This code was based on an implementation in java by Mike Bostock:
** http://bost.ocks.org/mike/shuffle/
*
* And on the many helpful strangers of Stack Overflow
** http://stackoverflow.com/questions/23281870/understanding-fischer-yates-shuffle
*
*/

function shuffleQuestions() {
    // Append placeholder Divs for each question
    for ( var i=0; i < $('div.QUESTION').length; i++ ) {
		$("#questions").append('<div id="question-' + i + '"></div>');
	};
    
    // Create an array of randomized questions
    var array = $("div.QUESTION");
    var currentIndex = array.length
    var temporaryValue; 
    var randomIndex;

    while ( currentIndex !== 0 ) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	};

    // Append randomized questions into placeholder Divs
    for (var i=0; i<array.length;i++ ) {
    	$("#question-" + i).append(array[i]);
	}
};
