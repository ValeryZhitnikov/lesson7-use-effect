import React, { useState, useEffect } from 'react';
import './List.css';
import ListItem from '../../elems/ListIlem/ListIlem';

export default function List(props) {
  const { setSelectedPerson } = props;
	const [list, setList] = useState([]);

	useEffect(() => {
		getListItems();
  }, []);

	const getListItems = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_LISTITEMS_URL + '/users.json');
			
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			const listItems = await response.json();
			setList(listItems);
		} catch(e) {
			console.error(e);
		}
	}

  const handlerClick = (item) => {
    setSelectedPerson(item);
  }

	const listItems = list.map(listItem => {
		return <ListItem handlerClick={() => handlerClick(listItem)} key={listItem.id}>{listItem.name}</ListItem>
	})

	return(
		<ul>
			{listItems}
		</ul>
	)
}