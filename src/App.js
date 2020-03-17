import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0,
      value:0,
      color:""
    }
  }

  componentDidMount  = () =>{
    this.setState({
      number:Math.floor(Math.random()*101) 
    },()=> console.log(this.state.number));
  }

  handlechange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }
  
  handlesubmit = () =>{
    if(Math.abs(this.state.number-parseInt(this.state.value))===0){
      this.setState({color:"green"});
    }
    else if(Math.abs(this.state.number-parseInt(this.state.value))<=4){
      this.setState({color:"red"});
    }
    else if(Math.abs(this.state.number-parseInt(this.state.value))<=15){
      this.setState({color:"yellow"});
    }
    else{
      this.setState({color:"blue"});
    }
  }

  render(){
    return(
      <div className="mt-5 container">
      <h1 className="text-center text-primary">Random Number Generator</h1>
      <div className="row justify-content-center mt-5">
      <div className="col-5">
      <input className="w-100" type="number" value={this.state.value} onChange={this.handlechange} placeholder="Enter number" name="value"/>
      <button className="w-100 btn btn-outline-primary mt-3" onClick={this.handlesubmit}>Submit</button>
      <p>{this.state.color}</p>
      </div>
      </div>
      </div>
    );
  }
}
