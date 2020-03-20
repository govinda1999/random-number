import React from 'react'

function Rule(){
	return(
		<>
			<p className="h4 mt-3 pt-3">Rules:</p>
	        <ul className="text-capitalize">
	        <li>Enter number between 1-100.</li>
	        <li>if Difference is zero => Success.</li>
	        <li>if Difference is less than 4 => Hot.</li>
	        <li>if Difference is less than 15 => Warm.</li>
	        <li>if Difference is greater than 15 => Cold.</li>
	        </ul>
		</>
	)
}
export default Rule;