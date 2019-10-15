console.log('app.js is running');

// jsx - javascript xml   


//if statements 
//ternary operator 
//logical and operation
//not rendering undefined elements 
 // babel src/app.js  --out-file=public/scripts/app.js --presets=env,react --watch

 


const app = {
	title: 'Indecision app',
	subtitle: 'put your life in the hands of a computer',
	options: []
}; 

const onFormSubmit = (e) => {
	e.preventDefault()

	const option = e.target.element.option.value

	if(option) {
		app.options.push(option)
		e.target.element.option.value = ''
	} 

	renderCount()
}

const remove = () => {
	app.options.length = 0 
	//app.options = []  //this will also work as the same as the above
	renderCount()
} 

const decision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNum]
	alert(option)
	console.log(randomNum)
}

const approot = document.getElementById('app');


const renderCount = () => {
	const template = (
		<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? 'Here are your options' :'no options'}</p>
		<button disabled={app.options.length === 0} onClick={decision}>What should i do?!</button>
		<button disabled={app.options.length === 0} onClick={remove}>remove all</button>
		<ol>
		{ 
			app.options.map((option) => <li key={option}>Option: {option} </li>)
		}
		</ol>
		<form onSubmit={onFormSubmit}>
		<input type="text" name="option"/>
		<button>Add option</button>
		</form>

		</div>
		); 
	
ReactDOM.render(template, approot) 

}

renderCount()