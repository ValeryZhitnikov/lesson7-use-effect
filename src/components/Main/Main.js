import React, { useState } from 'react';
import './Main.css';
import List from '../List/List';
import Details from '../Details/Details';

export default function Main() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div className="main">
      <List setSelectedPerson={setSelectedPerson}/>
      {selectedPerson && <Details info={selectedPerson} />}
    </div>
  )
}
