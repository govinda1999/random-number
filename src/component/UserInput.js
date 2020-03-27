import React,{Component} from 'react';

export default class UserInput extends Component{

	state={
		value:''
	}
	//to handle input text
    handlechange = (e) =>{
    	this.setState({ [e.target.name]: e.target.value });
  	}
	render(){
		return (
			<>
			<input 
            className="w-100 border border-top-0 border-left-0 border-right-0 border-info rounded pl-2" 
            type="number" 
            value={this.state.value} 
            onChange={this.handlechange} 
            placeholder="Enter number" 
            min={1}
            max={100}
            name="value"
            data-testid="input_id"/>
            <button className="w-100 btn btn-outline-primary mt-3" onClick={(event)=>this.props.handlesubmit(this.state.value)}
            data-testid="submit_id"
            >Submit</button>
            </>
		);
	}
}