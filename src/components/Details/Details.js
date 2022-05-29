import React, { useEffect, useState } from 'react';
import ListItem from '../../elems/ListIlem/ListIlem';
import './Details.css';

export default function Details(props) {
  const { info } = props;
  const [isLoading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPersonInfo();
  }, [info.id]);

  const getPersonInfo = async () => {
    setLoading(true);
    setPerson(null);
    try {
      const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
      if (!response.ok) {
        throw new Error(response.statusText);
      } 
  
      const personInfo = await response.json();
      setPerson(personInfo);
      
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  } 

  return (<> 
          {isLoading && <progress></progress>}
          { person && 
            <div className="person-item">
              <img width="300" height="300" loading="lazy" src={person.avatar} alt={person.name} />
              <h3>{person.name}</h3>
              <ul className="person-details">
                {Object.keys(person.details).map((detailName, i) => (
                  <ListItem key={i}>{detailName} : {person.details[detailName]}</ListItem>
                ))}
              </ul>
            </div> 
          }
          </>
  );
}
