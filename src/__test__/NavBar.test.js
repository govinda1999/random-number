import React from 'react';
import { unmountComponentAtNode,render} from "react-dom";
import NavBar from '../component/NavBar';
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

it('NavBar component render properly',()=>{
	act(() => {
		render(<NavBar />, container);  
	});
	expect(container.textContent)
	.toBe("WebApp");

	// act(() => {
	// 	render(<NavBar />, container);  
	// });
	// expect(container.textContent)
	// .not.toBe("")
})

