import React from 'react';
import UserInput from '../component/UserInput';
import {act} from 'react-dom/test-utils';
import {unmountComponentAtNode,render} from 'react-dom';
import {fireEvent} from '@testing-library/react'

let container = null;
beforeEach(()=>{
	container = document.createElement('div');
	document.body.appendChild(container);
})

afterEach(()=>{
	unmountComponentAtNode(container);
	container.remove();
	container=null;
})

it("UserInput Component render test",()=>{

	let user;

	let onChange = jest.fn((value)=>{
		user=value;
		// console.log(value);
	});

  	act(() => {
    	render(<UserInput handlesubmit={onChange} />, container);
  	});

  	const button = document.querySelector("[data-testid=submit_id]");
  	expect(button.innerHTML).toBe("Submit");

  	act(() => {
    	button.dispatchEvent(new MouseEvent("click", { bubbles: true }));});

  	expect(onChange).toHaveBeenCalledTimes(1);

})