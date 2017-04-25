function countdown(callback) {
	window.setTimeout(callback, 2000)
}


function createMultiplier(multiplierValue) {
	if (multiplierValue === 2) {
		return function(number) {
			return number * 2
		}
	} else {
		return function(number) {
			return number * 3
		}
	}
}
var doubler = createMultiplier(2)
var tripler = createMultiplier(3)


function multiplier(num1, num2) {
	return num1 * num2
}
var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)