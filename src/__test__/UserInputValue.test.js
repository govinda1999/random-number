import React from 'react';
import UserInput from '../component/UserInput';
import {act} from 'react-dom/test-utils';
import {unmountComponentAtNode,render} from 'react-dom';
import {fireEvent} from '@testing-library/react'

let container = null;
container = document.createElement('div');
document.body.appendChild(container);

it("UserInput Component render test",()=>{

	let user,input_value;

	let onChange = jest.fn((value)=>{
		user=value;
		// console.log(value);
	});

	act(()=>{
		render(<UserInput handlesubmit={onChange}/>,container);
		input_value="20";
		const input = document.querySelector("[data-testid=input_id]");
		fireEvent.change(input,{target:{value:input_value}});
	})
	const button = document.querySelector("[data-testid=submit_id]");

	act(() => {
  	button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
	expect(user).toBe(input_value);
	expect(onChange).toHaveBeenCalledTimes(1);
})