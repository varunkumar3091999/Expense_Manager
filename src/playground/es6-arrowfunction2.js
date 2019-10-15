// arguments op=bject is no longer bound with arrow functions

const add = function (a, b) {
	console.log(arguments)
	return a + b 

};

console.log(add(1, 1))  

const add2 = (a,b) => {
	// console.log(arguments)   // will cause an reference error
	return a+b
}

console.log(add2(1,1))

// 'this'  keyword - no longer bound with arrowfunctions 

const user = {
	name: 'varun',
	cities: ['chennai', 'new york', 'avadi'],
	printPlaceLived: function () {  
		//printPlaceLived() {  ===> this syntax will also work the same as the above  // known as the es6MethodDefinition syntax
	
		// this.cities.forEach( (city) => {        
		// 	console.log(this.name + ' has lived in ' + city)  // forEach Function 

		return this.cities.map((city) => this.name + ' has lived in ' + city)
		}
	}
 

console.log(user.printPlaceLived())  

const multiplier = {
	numbers: [1,2] ,
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((number) =>  number* this.multiplyBy)
	}
} 

console.log(multiplier.multiply())

// a function within another function  cannot user the this keyword but it can be do with the arrow functions

// arrow functions cannot have 'this' keyword unless it is built within an es5 function 

// map and forEach functions ==> forEach does something to each element of the array and map transform the elements into something else