import React from 'react';
import {ConteinerAlert} from './style';
function Alert(props){

	const { msg, tipo, setMsg } = props;
	return msg ? (
		<ConteinerAlert tipo={tipo}>
			<h1>{msg}</h1>
			<span onClick={()=>{setMsg(undefined);}}>
				&times;
			</span>
		</ConteinerAlert>
		) : null;
};

export default Alert;