import React, { Component } from 'react';
import './Hello.css'


// IN REACT CODING.
// class Hello extends Component {
// 	render() {
// 		return  (	//WHEN WANTING TO RETURN MULTIPLE LINES OF CODE. IT NEEDS TO BE WRAPPED IN BRACKETS TO REGISTER ALL THE LINES AS ONE EXPRESSION!	
// 		<div>
// 			<h1 className='code bg-light-yellow f1 tc'>Hello World</h1>
// 			<p>{this.props.greeting}</p>
// 		</div>
// 	)
// 	}
// }

// export default Hello;

// IN TRADITIONAL JAVASCIPT CODE.
// const Hello = (props) => {
// 	return (
// 		<div>
// 			<h1 className='code bg-light-yellow f1 tc'>Hello World</h1>
// 			<p>{props.greeting}</p>
// 		</div>
// 	)
// }

// export default Hello;

class Hello extends Component {
	render() {
		return  (	//WHEN WANTING TO RETURN MULTIPLE LINES OF CODE. IT NEEDS TO BE WRAPPED IN BRACKETS TO REGISTER ALL THE LINES AS ONE EXPRESSION!	
		<div>
			<h1 className='code bg-light-yellow f1 tc'>Hello World</h1>
			<p>{this.props.greeting}</p>
		</div>
	);
	}
}

export default Hello;