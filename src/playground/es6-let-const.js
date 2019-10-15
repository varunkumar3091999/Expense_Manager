var namevar = 'varun';
var namevar = 'kumar';

console.log('namevar' ,namevar);


let namelet = 'myname';
namelet = 'yourname';
console.log('namelet' ,namelet); 

const nameconst = 'name';
console.log('nameconst', nameconst); 


//function  scope   --> cannot print a var , let , const when defined inside a function 
function  petName() {
	const petname = 'hal';
	return petname;
} 

petName();

// console.log(petname); // erro  will occur 



//block scoping  --> if declared as 'var' can be printed outside the block and 
// if declared ind 'let' and 'const '  cannto be printed outside the block
var fullname = 'varun kumar';
let firstname;

if(fullname) {
	firstname = fullname.split(' ')[0];
	console.log(firstname);
} 

// console.log(firstname)  --> will becausing an error