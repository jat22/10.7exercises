

// #1
// {1,2,3,4}

// #2
// ['ref'']

// #3
// {
// 	[1,2,3] : true,
// 	[1,2,3] : false
// }


const hasDuplicate = arr => new Set(arr).size !== arr.length



const isVowel = char => 'aeiou'.includes(char);

function vowelCount (str){
	const vowelMap = new Map();
	const strLowerCase = str.toLowerCase();
	for (let letter of strLowerCase){
		if (isVowel(letter)) {
			if (vowelMap.get(letter) === undefined){
				vowelMap.set(letter, 1);
				// console.log(vowelMap);
			} else{
				vowelMap.set(letter, vowelMap.get(letter) + 1)
			}
		}
	}
	return vowelMap
}
