
class Person {                                     //Super class
	constructor(name = 'annonimous', age = 0) {
		this.name = name 
		this.age = age
	} 

	getGreeting() {
		// return 'hi I am ' + this.name + '!'  

		return `hi. I am ${this.name} !!!`  //es6 template string
	} 

	getDescription() {
		return `${this.name} is ${this.age} years old.`
	}

} 
class Student extends Person {                      //subclass
	constructor(name, age,major){
		super(name,age)
		this.major = major
	}

	hasMajor() {
		return !!this.major
	}
	getDescription() {
		let description = super.getDescription()
		if(this.hasMajor) {
			description += ` and their major is ${this.major}`
		}
		return description
	}

} 

class Traveller extends Person {					//subclass
	constructor(name, age, homelocation){
		super(name,age)
		this.homelocation = homelocation
	} 
	getGreeting() {
		let greeting = super.getGreeting()

		if(this.homelocation) {
			greeting += `im visiting from ${this.homelocation}.`
		}
		return greeting
	}
}


const me = new Traveller('Varun kumar',20,'chennai');
console.log(me.getGreeting()) 

const other = new Traveller()
console.log(other.getGreeting())