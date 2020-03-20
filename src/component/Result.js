import React from 'react';
export default function Result(props){
	if(props.text){
		return <p className={`text-center h3 mt-3 ${props.class}`}>{props.text}</p>; 
	}else{
		return <p></p>;
	}
}