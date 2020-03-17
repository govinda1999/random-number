import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0,
      value:'',
      text:null,
      class:""
    }
  }

  componentDidMount  = () =>{
    this.setState({
      number:Math.floor(Math.random()*100+1) 
    },()=> console.log(this.state.number));
  }
  //to handle input text
  handlechange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }
  //to handle submit button
  handlesubmit = () =>{
    //error handling
    if(isNaN(this.state.value) || this.state.value===""){
      this.setState({text:null});
      window.alert("Enter Proper Number");
    }
    //check for condition
    if(Math.abs(this.state.number-parseInt(this.state.value))===0){
      this.setState({class:"text-success",text:"Success!!"});
    }
    else if(Math.abs(this.state.number-parseInt(this.state.value))<=4){
      this.setState({class:"text-danger",text:"Hot!!"});
    }
    else if(Math.abs(this.state.number-parseInt(this.state.value))<=15){
      this.setState({class:"text-warning",text:"Warm!!"});
    }
    else if(Math.abs(this.state.number-parseInt(this.state.value))>15){
      this.setState({class:"text-primary",text:"Cold!!"});
    }
  }

  render(){
    return(
      <div className="container" >
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://localhost:3000"
            >
            WebApp
          </a>
        </nav>
        <h1 className="text-center text-info mt-5 pt-5">Number Guessing Web App</h1>
        <div className="row justify-content-center mt-5">
          <div className="col-5">
            <input 
            className="w-100 border border-top-0 border-left-0 border-right-0 border-info rounded pl-2" 
            type="number" 
            value={this.state.value} 
            onChange={this.handlechange} 
            placeholder="Enter number" 
            min={1}
            max={100}
            name="value"/>
            <button className="w-100 btn btn-outline-primary mt-3" onClick={this.handlesubmit}>Submit</button>
            {
              this.state.text?<p className={`text-center h3 mt-3 ${this.state.class}`}>{this.state.text}</p>:<p></p>
            }
          </div>
        </div>
        <p className="h4 mt-3 pt-3">Rules:</p>
        <ul className="text-capitalize">
        <li>Enter number between 1-100.</li>
        <li>if Difference is zero => Success.</li>
        <li>if Difference is less than 4 => Hot.</li>
        <li>if Difference is less than 15 => Warm.</li>
        <li>if Difference is greater than 15 => Cold.</li>
        </ul>
      </div>
    );
  }
}
