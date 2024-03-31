import React from 'react';

import Card from '../Card/Card.component';

export default function CardsContainer({ data }) {
  return (
    <div className='cards-container'>
        {data.map(element => (
            <Card element={element} />
      ))}
    </div>
  )
}