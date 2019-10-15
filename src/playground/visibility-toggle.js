
class Visibilitytoggle extends React.Component {
	constructor(props) {
		super(props)
		this.showItem = this.showItem.bind(this)
		this.state = {
			visibility: false
		}
	}

showItem() {
	this.setState(() => {
		return {
			visibility: !this.state.visibility
		}
	})
}



render() {
	return (
			<div>
				<h1> visibility toggle</h1>
			 	<button onClick={this.showItem}>
			 	 	{this.state.visibility ? 'hide details' : 'show details'}
			 	</button>
				
			 	{this.state.visibility && (
			 	<div>
			 	<p>details</p>
			 	</div>
			      )}
		 	</div> 

		)
}

}

ReactDOM.render(<Visibilitytoggle />, document.getElementById('app'))