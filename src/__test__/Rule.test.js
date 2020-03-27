import React from 'react';
import { unmountComponentAtNode,render} from "react-dom";
import Rule from '../component/Rule';
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

it('Rule component render properly',()=>{
	act(() => {
		render(<Rule />, container);  
	});
	expect(container.textContent)
	.toBe("Rules:Enter number between 1-100.if Difference is zero => Success.if Difference is less than 4 => Hot.if Difference is less than 15 => Warm.if Difference is greater than 15 => Cold.");

	act(() => {
		render(<Rule />, container);  
	});
	expect(container.textContent)
	.not.toBe("Rules:if Difference is zero => Success.if Difference is less than 4 => Hot.if Difference is less than 15 => Warm.if Difference is greater than 15 => Cold.")
})

