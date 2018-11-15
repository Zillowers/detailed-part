import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({closeHandler, data}) => (
	<div className = "modal-container">
		<div className = "modal-layover"></div>
		<div className = "modal-inner">
			<div className = "modal-inner-wrapper">
				{
					data.name ? 
					<div>
					<h3>We contacted to agent!</h3>
					<p>We contacted to agent for <b>{data.name}</b>'s request.
					<br/>The detail information will send to <b>{data.mail}</b> soon.</p>
					<p><b>Thank you for using the Zillow agent service! :)</b></p>
					</div> :
					<div><h4>{ data }</h4></div>
				}
				<button onClick={closeHandler}>CLOSE</button>
			</div>
		</div>
	</div>
)

export default Modal;