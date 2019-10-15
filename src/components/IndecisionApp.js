// importing files

import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal'

// class definition
export default class IndecisionApp extends React.Component{
	constructor(props){
		super(props)
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.handleDeleteOption = this.handleDeleteOption.bind(this)
		this.state = {
			options: [],
			selectedOption: undefined
		}
	}

componentDidMount() {                // lifecycle methods

	try{
		const json  = localStorage.getItem('options')
		const options = JSON.parse(json)

		if(options) {
		this.setState(() => ({options}))
		
	}

	} catch (e) {
			//do nothing at all
	}
} 

componentDidUpdate(prevProps, prevState) {	// lifecycle methods
	if(prevState.options.length !== this.state.options.length) {
		const json = JSON.stringify(this.state.options)
		localStorage.setItem('options', json)
		
	}

	
}

componentWillUnmount() {				// lifecycle methods
	 console.log('componentwillunmount')
}
	handleDeleteOptions() {
		this.setState(() => ({ options: []  }))
	} 

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) =>  optionToRemove !== option)
		}))
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		const option = this.state.options[randomNum]
		// alert(option)
		this.setState(() => ({
			selectedOption: option
		}))
	}

	handleAddOption(option){
		if(!option) {
			return 'do not enter empty options'		
		}
		else if(this.state.options.indexOf(option) > -1){

			return  'option already exist'
		}
		this.setState((prevState) =>  ({options:prevState.options.concat(option)}))
		console.log(option)
	}

	handleClearModal = () => {

		this.setState(() => ({selectedOption: undefined}))
	}

	render(){
		const title = 'Indecision app'
		const subTitle = 'Give your life in the hands of a computer!'
		
		return (
			<div>
				<Header   subTitle={subTitle}/>
				<div className="container">
					<Action 
					hasOptions={this.state.options.length > 0}
						 handlePick={this.handlePick}
					/>

					<div className="widget">
						<Options 
						options={this.state.options}
						handleDeleteOptions={this.handleDeleteOptions}
						handleDeleteOption={this.handleDeleteOption}
						/>

						<AddOption handleAddOption={this.handleAddOption}/>
					</div>
					
					<OptionModal 
						selectedOption={this.state.selectedOption}
						handleClearModal={this.handleClearModal}
					/>

				</div>
				
			</div>
			)
	}
}