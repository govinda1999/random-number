import React from 'react';
import { unmountComponentAtNode,render} from "react-dom";
import Result from '../component/Result';
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Result component render properly',()=>{
	act(() => {
		render(<Result actual={20} userinput={20}/>, container);  
	});
	expect(container.textContent)
	.toBe("Success!!");

	act(() => {
		render(<Result actual={20} userinput={23}/>, container);  
	});
	expect(container.textContent)
	.toBe("Hot!!");

	act(() => {
		render(<Result actual={20} userinput={30}/>, container);  
	});
	expect(container.textContent)
	.toBe("Warm!!");

	act(() => {
		render(<Result actual={20} userinput={50}/>, container);  
	});
	expect(container.textContent)
	.toBe("Cold!!");

	act(() => {
		render(<Result actual={20} userinput={25}/>, container);  
	});
	expect(container.textContent)
	.not.toBe("Success!!");

	act(() => {
		render(<Result actual={20} userinput={0}/>, container);  
	});
	expect(container.textContent)
	.toBe("");
})

