var vowels = ["a","e","i", "o", "u", "y"];
var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];

function generateCombinations (inputString) {
	var inputVowels = [];
	var inputConsonants = [];
	var inputChars = inputString.split('');
	inputChars.forEach(function(inputChar) {
		if(vowels.indexOf(inputChar) == -1) {
			inputConsonants.push(inputChar)
		} else {
			inputVowels.push(inputChar)
		}
	})
	console.log(inputVowels)
	console.log(inputConsonants)
	var combinations = [];
	// First spot consonant last two vowels
	// Could build an outer loop that decides how many consonants to bring in and then let all the other loops depend on that one.
	
	for (var i = 0; i < inputConsonants.length; i++) {
		for(var j = 0; j<inputVowels.length; j++) {
			for(var k = 0; k<inputVowels.length; k++) {
				var tmpWord = inputConsonants[i]+inputVowels[j]+inputVowels[k];
				if(combinations.indexOf(tmpWord) == -1) {
					combinations.push(tmpWord);
					combinations.push(inputVowels[j]+inputConsonants[i]+inputVowels[k])
					combinations.push(inputVowels[k]+inputVowels[j]+inputConsonants[i])
					if(inputVowels[k] != inputVowels[j]) {
						combinations.push(inputConsonants[i]+inputVowels[k]+inputVowels[j])
						combinations.push(inputVowels[k]+inputConsonants[i]+inputVowels[j])
						combinations.push(inputVowels[j]+inputVowels[k]+inputConsonants[i])
					}
				}
			}
		}
	}
	return combinations;
}

Template.hello.events({
	'click button': function(evt, template) {
		var result = generateCombinations("baaco")

		console.log(result)


	}
})