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
})

