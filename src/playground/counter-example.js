class Counter extends React.Component{
	constructor(props) {
		super(props)
		this.handleAddONe = this.handleAddONe.bind(this)
		this.handleMinusONe = this.handleMinusONe.bind(this)
		this.handleReset = this.handleReset.bind(this)
		this.state = {
			count: 0
		}
		}

		componentDidMount() {
			const stringCount = localStorage.getItem('count')
			const count = parseInt(stringCount, 10)

			if(!isNaN(count)) {
				this.setState(() => ({count}))
			}
		}
		componentDidUpdate(prevProps, prevState) {

			if(prevState.count !== this.state.count) {
			
			localStorage.setItem('count', this.state.count)
			console.log('update')
			}
		
	}
		handleAddONe() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1
			}
		})
	}
	handleMinusONe() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			}
		})
	}
	handleReset() {
		this.setState(() => {
			return {
				count:0
			}

		})
	}
	
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddONe}>+1</button>
				<button onClick={this.handleMinusONe}>-1</button>
				<button  onClick={this.handleReset}>reset</button>
			</div>
		)
	}
}




ReactDOM.render(<Counter />, document.getElementById('app'))