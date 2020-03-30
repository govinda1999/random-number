import React from 'react';
import { unmountComponentAtNode,render} from "react-dom";
import App from '../App';
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

it('App component render properly',()=>{
	act(() => {
		render(<App />, container);  
	});
	expect(container.textContent)
	.toBe("WebAppNumber Guessing Web AppSubmitRules:Enter number between 1-100.if Difference is zero => Success.if Difference is less than 4 => Hot.if Difference is less than 15 => Warm.if Difference is greater than 15 => Cold.");
})

