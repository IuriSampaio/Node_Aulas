import React from 'react';
import {ConteinerAlert} from './style';

export function Alert(props){

	const { msg, tipo, setMsg } = props;
	const elmentAlert = React.useRef();

	React.useEffect(()=>{
		if(msg){
			elmentAlert.current.style.width = "300px";
		}else{
			elmentAlert.current.style.width = "0px";
		}
	},[msg]);

	return (
		<ConteinerAlert ref={elmentAlert} tipo={tipo}>
			<h1>{msg}</h1>
			{msg && 
				(<p onClick={ ()=>{ setMsg(undefined); } } >
					&times;
				</p>)
			}
			
		</ConteinerAlert>
		);
};
