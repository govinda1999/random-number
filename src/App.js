import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0,
      value:999,
    }
  }
  componentWillMount  = () =>{
    this.setState({
      number:Math.floor(Math.random()*101) 
    });
  }
  render(){
    return(
      <div className="mt-5">
      <h1 className="text-center text-primary">Random Number Generator</h1>
      <p>{this.state.number}</p>
      </div>
    );
  }
}
