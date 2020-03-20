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
      text:null,
      class:""
    }
  }

  componentDidMount  = () =>{
    this.setState({
      number:Math.floor(Math.random()*100+1) 
    },()=> console.log(this.state.number));
  }
  //to handle submit button
  handlesubmit = (value) =>{
    //error handling
    if(isNaN(value)||value===""){
      this.setState({text:null});
      window.alert("Enter Proper Number");
    }
    //check for condition
    if(Math.abs(this.state.number-parseInt(value))===0){
      this.setState({class:"text-success",text:"Success!!"});
    }
    else if(Math.abs(this.state.number-parseInt(value))<=4){
      this.setState({class:"text-danger",text:"Hot!!"});
    }
    else if(Math.abs(this.state.number-parseInt(value))<=15){
      this.setState({class:"text-warning",text:"Warm!!"});
    }
    else if(Math.abs(this.state.number-parseInt(value))>15){
      this.setState({class:"text-primary",text:"Cold!!"});
    }
  }

  render(){
    return(
      <div className="container" >
        <NavBar />
        <h1 className="text-center text-info mt-5 pt-5">Number Guessing Web App</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-5">
            <UserInput handlesubmit={this.handlesubmit}/>
            <Result text={this.state.text} class={this.state.class}/>
          </div>
        </div>
        <Rule />
      </div>
    );
  }
}
