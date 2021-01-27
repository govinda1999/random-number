import React from 'react';
export default function Result({userinput,actual}){

	if(userinput===0){
		return "";
	}
	if(isNaN(userinput)||userinput===""){
      window.alert("Enter Proper Number");
      return ;
    }
    let classname="";
    let text="";
    if(Math.abs(actual-parseInt(userinput))===0){
      classname="text-success";
      text="Success!!";
    }
    else if(Math.abs(actual-parseInt(userinput))<=4){
      classname="text-danger";
      text="Hot!!";
    }
    else if(Math.abs(actual-parseInt(userinput))<=15){
      classname="text-warning";
      text="Warm!!";
    }
    else if(Math.abs(actual-parseInt(userinput))>15){
      classname="text-primary";
      text="Cold!!";
    }
	return <p className={`text-center h3 mt-3 ${classname}`}>{text}</p>; 
}