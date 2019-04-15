import React from 'react';
import Card from './Card';

const List = ({ header, card, id }) => {
  const cards = card.map(card => (
    <Card title={card.title} content={card.content} />
  ));

  return (
    <section className='List'>
      <header class='List-header'>
        <h2>{header}</h2>
      </header>
      <div class='List-cards'>{cards}</div>
    </section>
  );
};

export default List;
