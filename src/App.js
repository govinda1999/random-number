import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rule from './component/Rule'
import UserInput from './component/UserInput';
import NavBar from './component/NavBar'
import Result from './component/Result'
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0,
      userinput:0
    }
  }

  componentDidMount  = () =>{
    this.setState({
      number:Math.floor(Math.random()*100+1) 
    },()=> console.log(this.state.number));
  }

  handlesubmit = (value) =>{
    this.setState({userinput:value})
  }

  render(){
    return(
      <div className="container" >
        <NavBar />
        <h1 className="text-center text-info mt-5 pt-5">Number Guessing Web App</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-5">
            <UserInput handlesubmit={this.handlesubmit}/>
            <Result actual={this.state.number} userinput={this.state.userinput}/>
          </div>
        </div>
        <Rule />
      </div>
    );
  }
}
