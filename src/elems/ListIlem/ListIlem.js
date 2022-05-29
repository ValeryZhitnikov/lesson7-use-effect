import React from 'react';
import './ListIlem.css';

export default function ListItem(props) {
  const { handlerClick } = props;

	return(
		<li onClick={handlerClick} className="list-item">
			{props.children}
		</li>
	)
}