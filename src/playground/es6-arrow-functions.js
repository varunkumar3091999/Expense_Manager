const square = function(x) { // es5 function without a name || declaring functions is different from naming the function
	return x*x
} 

console.log(square(8))  


function funcName(x) { // also es5 function with no declaration but with a name
	return x*x
} 

console.log(funcName(8))

const squareArrow = (x) => { // es6 arrow functions --> cannot be named , always annonimous || can only be assigned to a variable
	return x*x
} 

console.log(squareArrow(8)) 

const simpArrFunc = (x) => x*x  //  " EXPRESSION SYNTAX"simpler syntax for an arrow function nut can be used only when the function only returns someting and nothing else 

console.log(simpArrFunc(8))     // return can be ommited


//challenge
const firstName = (fullname) => {
		return fullname.split(' ')[0]
} 

console.log(firstName('varun kumar')) 


const firstname2 = (fullname) => fullname.split(' ')[0] 

console.log(firstname2('varun kumar'))